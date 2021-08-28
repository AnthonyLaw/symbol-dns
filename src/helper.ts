import { IDNSRecord } from '@/types';
export class Helper {
    /**
     * Process custom DNS Records in the Map.
     * @param metadataValue
     * @returns {Map<string, string>}
     */
    public static dnsRecordParser = (metadataValue: string): Map<string, string> => {
        const domainMap: Map<string, string> = new Map();

        const list = metadataValue.split('|');
        for (const item of list) {
            const obj: IDNSRecord = JSON.parse(`{${item}}`);

            const url = obj.v.replace('sia://', 'https://siasky.net/').replace('ipfs://', 'https://ipfs.io/ipfs/');

            domainMap.set(obj.n, url);
        }

        return domainMap;
    };

    /**
     * Convert dnsRecords object to metadata string.
     * @param dnsRecords
     * @returns string
     */
    public static dnsRecordToMetadataValue = (dnsRecords: IDNSRecord[]): string => {
        return JSON.stringify(dnsRecords).replaceAll('},{', '|').replaceAll('[{', '').replaceAll('}]', '');
    };

    /**
     * Get random index.
     * @param string[]
     * @returns index number
     */
    public static getRandomIndex(array: string[]): number {
        return Math.floor(Math.random() * array.length);
    }
}
