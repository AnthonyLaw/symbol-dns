import { RepositoryFactoryHttp, SignedTransaction } from 'symbol-sdk';
import { Network } from '@/constants';
import { Helper } from '@/helper';

export class NodeRepository {
    /**
     * Create connection to the network.
     * @returns RepositoryFactoryHttp
     */
    public static getRepositoryFactoryHttp = (): RepositoryFactoryHttp => {
        const randomIndex = Helper.getRandomIndex(Network.endpoints);

        return new RepositoryFactoryHttp(Network.endpoints[randomIndex], {
            networkType: Network.type,
            generationHash: Network.generationHash,
        });
    };

    /**
     * Announce a transaction to the network.
     * @params signedTransaction
     */
    public static announceTransaction = async (signedTransaction: SignedTransaction): Promise<void> => {
        try {
            await NodeRepository.getRepositoryFactoryHttp().createTransactionRepository().announce(signedTransaction).toPromise();
        } catch (err) {
            throw new Error(`There was a problem trying to announce Transaction.`);
        }
    };

    /**
     * Get Average fees multiplier from network min 100.
     * @returns number
     */
    public static getAverageFeeMultiplier = async (): Promise<number> => {
        const feeMultiplier = (await NodeRepository.getRepositoryFactoryHttp().createNetworkRepository().getTransactionFees().toPromise())
            .averageFeeMultiplier;

        return feeMultiplier > 0 ? feeMultiplier : 100;
    };
}
