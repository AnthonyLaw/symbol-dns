import { NetworkType } from 'symbol-sdk';

export const Network = {
    endpoints: [
        'https://sym-test-02.opening-line.jp:3001',
        'http://ngl-dual-501.testnet.symboldev.network:3000',
        'http://ngl-api-001.testnet.symboldev.network:3000',
    ],
    generationHash: '3B5E1FA6445653C971A50687E75E6D09FB30481055E3990C84B25E9222DC1155',
    metadataKey: 'D9766DB9BFCFF27C', // symbol-dns-record-1
    type: NetworkType.TEST_NET,
};
