<template>
    <div>
        <div class="card">
            <div class="title">Symbol-DNS</div>
            <div>
                Decentralized internet domain builds on top of symbol blockchain. Anyone can own decentralized Top-level domains (TLD)
                Top-level domains (TLD)
            </div>
        </div>

        <div class="card">
            <div class="title">Top-level domains (TLD)</div>
            <DisplayDomainTLD :domains="centralizedTLDs" />

            <div><b>Centralized</b> TLD, it controlled and monitor by <b>ICANN</b>.</div>
            <DisplayDomainTLD :domains="decentralizedTLDs" />
            <DisplayDomainTLD :domains="decentralizedDomains" />

            <div><b>Decentralized</b> TLD, it controlled and monitor <b>YOU</b>.</div>
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
    get centralizedTLDs(): string[] {
        return ['.com', '.org', '.io'];
    }

    get decentralizedTLDs(): string[] {
        return ['.happy', '.sunday', '.zero'];
    }

    get decentralizedDomains(): string[] {
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
