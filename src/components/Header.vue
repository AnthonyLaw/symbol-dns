<template>
    <header>
        <div class="title">Symbol-DNS</div>
        <div class="search-domain-box">
            <input type="text" />
        </div>
    </header>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {},
})
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
header {
    @apply bg-purple-600 text-white p-5 mb-10 flex fixed inset-x-0 top-0;

    .title {
        @apply text-left;
    }

    .search-domain-box {
        @apply flex justify-center items-center w-1/2 border absolute left-1/2 rounded-xl transform -translate-x-1/2;

        input {
            @apply rounded-lg w-full;
        }
    }
}
</style>
