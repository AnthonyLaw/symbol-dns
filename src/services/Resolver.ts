import { NamespaceId } from 'symbol-sdk';
import { Helper } from '@/helper';
import { MetadataRepository } from '@/services';

export class Resolver {
    /**
     * Get redirect url from the decentralized domain
     * @param domainName[] domain name splited by '|'
     * @returns redirectUrl string
     */
    static getURL = async (domainName: string[]): Promise<string | undefined> => {
        const namespaceId = new NamespaceId(domainName[0]);
        const metadatas = await MetadataRepository.getMetadata(namespaceId);

        if (metadatas.length === 0) {
            return undefined;
        }

        const domainMap = Helper.dnsRecordParser(metadatas[0].metadataEntry.value);

        if (domainName.length === 2) {
            const subdomain = domainName[1];

            if (domainMap.has(subdomain)) {
                return domainMap.get(subdomain);
            }
        }

        if (domainName.length === 1) {
            if (domainMap.has('@')) {
                return domainMap.get('@');
            }
        }

        return undefined;
    };
}
