<template>
    <div class="error">
        <div>Opps, Something went wrong.</div>
        <div>The domain could not be resolved by Symbol-DNS.</div>
        <div>Check more <router-link class="text-green-300 underline" to="/lookup">here</router-link>.</div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class Error extends Vue {}
</script>

<style lang="scss" scoped>
.error {
    @apply pt-10 text-center;
}
</style>
