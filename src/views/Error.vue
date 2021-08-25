<template>
    <div>Opps, Something went wrong.</div>
    <div>The domain could not be resolved by Symbol-DNS. Please try another domain...</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
})
export default class Error extends Vue {}
</script>