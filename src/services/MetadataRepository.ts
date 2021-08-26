import { NamespaceId, RepositoryFactoryHttp, MetadataType, Metadata } from 'symbol-sdk';
import { Network } from '@/constants';
import { Helper } from '@/helper';

export class MetadataRepository {
    /**
     * Create connection to the network.
     * @returns RepositoryFactoryHttp
     */
    private static getRepositoryFactoryHttp = (): RepositoryFactoryHttp => {
        const randomIndex = Helper.getRandomIndex(Network.endpoints);

        return new RepositoryFactoryHttp(Network.endpoints[randomIndex], {
            networkType: Network.type,
            generationHash: Network.generationHash,
        });
    };

    /**
     * Get metadata from the network.
     * @param namespaceId NamespaceId
     * @param metadataKey optonal
     * @returns Metadata[]
     */
    static getMetadata = async (namespaceId: NamespaceId, scopedMetadataKey = Network.metadataKey): Promise<Metadata[]> => {
        const result = await MetadataRepository.getRepositoryFactoryHttp()
            .createMetadataRepository()
            .search({
                metadataType: MetadataType.Namespace,
                targetId: namespaceId,
                scopedMetadataKey,
            })
            .toPromise();

        return result.data;
    };
}
