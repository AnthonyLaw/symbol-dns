<template>
    <div class="wrapper">
        <div class="domains-holder">
            <div v-for="(domain, index) in domains" :key="'tld_' + index" class="domains">
                {{ domain }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
        domains: Array,
    },
})
export default class DisplayDomainTLD extends Vue {}
</script>

<style lang="scss" scope>
.wrapper {
    @apply text-center text-xl;

    .domains-holder {
        @apply inline-flex py-2;
    }

    .domains {
        @apply text-red-400 px-5;
    }

    .domains:hover {
        @apply text-red-600 px-5;
    }
}
</style>
