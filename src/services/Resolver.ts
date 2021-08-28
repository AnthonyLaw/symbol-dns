import { NamespaceId } from 'symbol-sdk';
import { Helper } from '@/helper';
import { MetadataRepository, NamespaceRepository } from '@/services';
import { IDNSRecord } from '@/types';

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

    /**
     * Get metadata value from the namespace.
     * @param namespaceName namespace name
     * @returns metadata value
     */
    static getMetadataValue = async (namespaceName: string): Promise<string> => {
        const namespaceId = new NamespaceId(namespaceName);
        const metadatas = await MetadataRepository.getMetadata(namespaceId);

        return metadatas[0]?.metadataEntry?.value ?? '';
    };

    /**
     * Update metadata value from the namespace.
     * @param privateKey Namespace owner private key
     * @param namespaceName namespace name
     * @param dnsRecord[] latest dns record
     */
    static updateMetadata = async (privateKey: string, namespaceName: string, dnsRecord: IDNSRecord[]): Promise<string> => {
        const formattedData = Helper.dnsRecordToMetadataValue(dnsRecord);
        const namespaceId = new NamespaceId(namespaceName);

        try {
            return await MetadataRepository.updateMetadata(privateKey, formattedData, namespaceId);
        } catch (error) {
            return `Error: ${(error as Error).message}`;
        }
    };

    /**
     * Check namespace is exist or not.
     * @param namespaceName namespace name
     * @returns boolean
     */
    static isNamespaceExist = async (namespaceName: string): Promise<boolean> => {
        const namespaceId = new NamespaceId(namespaceName);

        try {
            await NamespaceRepository.getNamespace(namespaceId);
            return true;
        } catch (error) {
            return false;
        }
    };
}
