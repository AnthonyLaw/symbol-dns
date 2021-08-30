<template>
    <div class="search-domain-box">
        <input type="text" v-model="domainInput" placeholder="Enter a decentralized domain name" @keyup.enter="go" :disabled="isRequest" />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Resolver } from '@/services';

@Options({
    props: {},
})
export default class SearchDomainInput extends Vue {
    domainInput = '';
    isRequest = false;

    async go(): Promise<void> {
        if (this.domainInput === '') {
            return;
        }

        this.isRequest = true;

        const domainName = this.domainInput.toLowerCase().trim().split('.').reverse();

        if (domainName.length > 0 && domainName.length < 3) {
            const resolveUrl = await Resolver.getURL(domainName);
            if (resolveUrl) {
                window.location.href = resolveUrl;
                this.isRequest = false;
                return;
            }
        }

        this.$router.push('/error');
        this.isRequest = false;
    }
}
</script>

<style lang="scss" scoped>
.search-domain-box {
    @apply flex justify-center items-center w-1/2 border absolute left-1/2 rounded-xl transform -translate-x-1/2 shadow-lg text-gray-800;

    input {
        @apply rounded-lg w-full text-center;
    }
}
</style>
