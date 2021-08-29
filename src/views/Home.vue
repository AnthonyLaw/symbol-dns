<template>
    <div>
        <div class="card">
            <div class="title">Symbol-DNS</div>
            <div>
                Decentralized internet domain builds on top of Symbol blockchain. Anyone can own a decentralised top-level domain on Symbol
                blockchain.
            </div>
        </div>

        <div class="card">
            <div class="title">Top-level domains (TLD)</div>
            <DisplayDomainTLD :domains="centralisedTLDs" />

            <div><b>Centralised</b> TLD is controlled and monitored by <b>ICANN</b>.</div>
            <DisplayDomainTLD :domains="decentralisedTLDs" />
            <DisplayDomainTLD :domains="decentralisedDomains" />

            <div><b>Decentralised</b> TLD is controlled and monitored by <b>YOU</b>.</div>
            <div>Create custom TLD names along with domain names and it keeps your info private.</div>
        </div>

        <div class="card">
            <div class="title">How it works?</div>

            <div class="py-1">1. To own the TLD, you must own a root namespace on the Symbol blockchain.</div>
            <div class="py-1">
                2. All the DNS records will store on namespace metadata.
                <span class="text-green-300"
                    ><a href="http://explorer.testnet.symboldev.network/namespaces/supernerd" target="_blank">Example</a></span
                >
            </div>
            <div class="py-1">
                3. To facilitate query for DNS record, I decided to use <b>D9766DB9BFCFF27C / symbol-dns-record-1</b> as scoped metadata
                key, in future it may to expand more key such as symbol-dns-record-2 and etc.
            </div>
        </div>

        <div class="card">
            <div class="title">How to use it?</div>

            <div class="py-1">
                1. Search decentralized domain on the top bar, and <b>Hit</b> enter, it will look on the DNS record and redirect to the
                page.
            </div>
            <div class="py-1">
                2. To configure the DNS record, please check out
                <span class="text-green-300"><router-link to="/lookup">Lookup</router-link></span>
                .
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import DisplayDomainTLD from '@/components/DisplayDomainTLD.vue';

@Options({
    components: { DisplayDomainTLD },
})
export default class Home extends Vue {
    get centralisedTLDs(): string[] {
        return ['.com', '.org', '.io'];
    }

    get decentralisedTLDs(): string[] {
        return ['.happy', '.sunday', '.zero'];
    }

    get decentralisedDomains(): string[] {
        return ['super.happy', 'ipfs.sunday', 'nft.zero'];
    }
}
</script>

<style lang="scss" scoped>
.card {
    @apply p-3 max-w-lg;
}

.title {
    @apply text-2xl text-left mb-2 font-extrabold;
}
</style>
