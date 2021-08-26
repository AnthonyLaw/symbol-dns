interface IDNSRecord {
    n: string;
    v: string;
}

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

    public static getRandomIndex(array: string[]): number {
        return Math.floor(Math.random() * array.length);
    }
}
