<template>
    <div class="error">
        <div>Opps, Something went wrong.</div>
        <div>The domain could not be resolved by Symbol-DNS.</div>
        <div>Please try another domain...</div>
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
