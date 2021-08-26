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
