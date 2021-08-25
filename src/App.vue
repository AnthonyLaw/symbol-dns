<template>
    <Header />
    <div class="container main">
        <router-view />
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue';

@Options({
    components: {
        Header,
    },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
.main {
    @apply p-20 flex flex-col justify-center flex-grow min-h-screen mx-auto items-center;
}
</style>
