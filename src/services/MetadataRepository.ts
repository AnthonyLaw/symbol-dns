import {
    NamespaceId,
    MetadataType,
    Metadata,
    KeyGenerator,
    Account,
    MetadataTransactionService,
    UInt64,
    Deadline,
    AggregateTransaction,
} from 'symbol-sdk';
import { Network } from '@/constants';
import { NodeRepository } from '@/services';
export class MetadataRepository {
    /**
     * Get metadata from the network.
     * @param namespaceId NamespaceId
     * @param metadataKeyHex optonal
     * @returns Metadata[]
     */
    static getMetadata = async (namespaceId: NamespaceId, scopedMetadataKey = Network.metadataKeyHex): Promise<Metadata[]> => {
        const result = await NodeRepository.getRepositoryFactoryHttp()
            .createMetadataRepository()
            .search({
                metadataType: MetadataType.Namespace,
                targetId: namespaceId,
                scopedMetadataKey,
            })
            .toPromise();

        return result.data;
    };

    /**
     * Create or update namespace metadata value.
     * @param privateKey namespace owner private key
     * @param value metadata value
     * @param namespaceId target namespace id
     */
    static updateMetadata = async (privateKey: string, value: string, namespaceId: NamespaceId): Promise<string> => {
        const namespaceOwner = Account.createFromPrivateKey(privateKey, Network.type);

        const metadataHttp = NodeRepository.getRepositoryFactoryHttp().createMetadataRepository();
        const metadataService = new MetadataTransactionService(metadataHttp);

        const epochAdjust = await NodeRepository.getRepositoryFactoryHttp().getEpochAdjustment().toPromise();
        const averageFeeMultiplier = await NodeRepository.getAverageFeeMultiplier();

        const namespaceMetadata = await metadataService
            .createNamespaceMetadataTransaction(
                Deadline.create(epochAdjust),
                Network.type,
                namespaceOwner.address,
                namespaceId,
                KeyGenerator.generateUInt64Key(Network.metadataKey),
                value,
                namespaceOwner.address,
                UInt64.fromUint(0),
            )
            .toPromise();

        const aggregateTransaction = AggregateTransaction.createComplete(
            Deadline.create(epochAdjust),
            [namespaceMetadata.toAggregate(namespaceOwner.publicAccount)],
            Network.type,
            [],
        ).setMaxFeeForAggregate(averageFeeMultiplier, 1);

        aggregateTransaction.signedByAccount(namespaceOwner.publicAccount);

        const signedTransaction = namespaceOwner.sign(aggregateTransaction, Network.generationHash);

        await NodeRepository.announceTransaction(signedTransaction);

        return signedTransaction.hash;
    };
}
