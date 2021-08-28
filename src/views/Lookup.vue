<template>
    <div>
        <div class="card">
            <div class="title">Namespace Lookup</div>

            <input type="text" v-model="namespace" />
            <button @click="namespaceLookup" :disabled="isLoading">Lookup</button>
        </div>

        <div v-if="isNamespaceExist">
            <div class="card">
                <div class="title">Add DNS Record</div>
                <input type="text" v-model="newDnsRecord.n" class="w-6/12" placeholder="example: hello, @" />
                <input type="text" v-model="newDnsRecord.v" class="w-6/12" placeholder="example: ipfs://abc" />
                <button @click="addDNSRecord">Add</button>
            </div>

            <div class="card">
                <div class="title">DNS Record</div>
                If you like to assgin link to use root namespace, you can use "@".
                <table class="table-fixed">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(record, index) in this.metadataValue" :key="'record_' + index">
                            <td v-for="(value, valIndex) in Object.values(record)" :key="'valIndex_' + valIndex">
                                {{ value }}
                            </td>

                            <td @click="removeDNSRecord(index)">x</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card">
                <div class="title">Sign</div>
                <input class="w-8/12" type="text" v-model="privateKey" placeholder="Namespace owner's private key" />
                <button @click="announce" :disabled="isLoading">Announce</button>
                <div v-if="status.length > 0">Status: {{ status }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Resolver } from '@/services';
import { IDNSRecord } from '@/types';

export default class Lookup extends Vue {
    public namespace = '';
    public isNamespaceExist = false;
    public metadataValue: IDNSRecord[] = [];
    public newDnsRecord: IDNSRecord = { n: '', v: '' };
    public privateKey = '';
    public isLoading = false;
    public status = '';

    async namespaceLookup(): Promise<void> {
        if (this.namespace === '') {
            return;
        }

        this.isLoading = true;

        this.resetState();

        const namespace = await Resolver.isNamespaceExist(this.namespace);

        if (!namespace) {
            this.isLoading = false;
            return;
        }

        const metadataValue = await Resolver.getMetadataValue(this.namespace);

        if (metadataValue.length > 0) {
            this.isNamespaceExist = true;
        }

        this.metadataValue = metadataValue.split('|').map((record: string) => JSON.parse(`{${record}}`));

        this.isLoading = false;
    }

    async announce(): Promise<void> {
        this.isLoading = true;

        this.status = await Resolver.updateMetadata(this.privateKey, this.namespace, this.metadataValue);

        this.isLoading = false;

        return;
    }

    addDNSRecord(): void {
        if (this.newDnsRecord.n === '' || this.newDnsRecord.v === '') {
            return;
        }

        if (!this.metadataValue.map((record) => record.n).includes(this.newDnsRecord.n)) {
            this.metadataValue.push(this.newDnsRecord);

            this.newDnsRecord = { n: '', v: '' };
        }
    }

    removeDNSRecord(index: number): void {
        this.metadataValue.splice(index, 1);
    }

    resetState(): void {
        this.isNamespaceExist = false;
        this.metadataValue = [];
        this.privateKey = '';
        this.newDnsRecord = { n: '', v: '' };
        this.status = '';
    }
}
</script>

<style lang="scss" scoped>
.card {
    @apply p-3 max-w-lg;

    .title {
        @apply text-2xl text-left mb-2 font-extrabold;
    }

    button,
    input {
        @apply mx-2 rounded-lg px-2 py-1;
    }

    input {
        @apply border-2;
    }

    button {
        @apply bg-purple-300;
    }

    td,
    th {
        @apply px-4 py-2;
    }

    td {
        @apply border;
    }
}
</style>
