<template>
    <a-descriptions :column="1">
        <a-descriptions-item label="網站">
            <a-tag v-for="web in webs" :key="web.name" color="green">
                {{ web.name }}
            </a-tag>
        </a-descriptions-item>
        <a-descriptions-item label="銀行">
            <a-tag v-for="bank in banks" :key="bank.name" color="blue">
                {{ bank.name }}
            </a-tag>
        </a-descriptions-item>
    </a-descriptions>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Bank from '@/settings/interfaces/bank';
import Web from '@/settings/interfaces/web';

@Component({})
export default class extends Vue {
    get webs(): Web[] {
        return this.$store.state.settingsModule.webs;
    }

    get banks(): Bank[] {
        return this.$store.state.settingsModule.banks;
    }
}
</script>

<style scoped></style>
