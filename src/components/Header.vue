<template>
    <header>
        <div class="title">Symbol-DNS</div>
        <SearchDomainInput />
    </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SearchDomainInput from '@/components/SearchDomainInput.vue';

@Options({
    components: {
        SearchDomainInput,
    },
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
header {
    @apply bg-purple-600 text-white p-5 mb-10 flex fixed inset-x-0 top-0 font-bold;

    .title {
        @apply text-left;
    }
}
</style>
