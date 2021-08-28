import { NamespaceId, NamespaceService, Namespace } from 'symbol-sdk';
import { NodeRepository } from '@/services';
export class NamespaceRepository {
    /**
     * Get namespace from the network.
     * @param namespaceId NamespaceId
     * @returns Namespace
     */
    static getNamespace = async (namespaceId: NamespaceId): Promise<Namespace> => {
        const namespaceRepository = NodeRepository.getRepositoryFactoryHttp().createNamespaceRepository();

        return await new NamespaceService(namespaceRepository).namespace(namespaceId).toPromise();
    };
}
