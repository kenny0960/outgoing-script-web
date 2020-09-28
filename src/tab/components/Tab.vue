<template>
    <a-tabs :active-key="selectedBank.swiftBankCode" @tabClick="handleBankClick">
        <slot slot="tabBarExtraContent">
            <a-radio-group button-style="solid" :defaultValue="selectedWeb" @change="handleWebClick">
                <a-radio-button v-for="web in webs" :value="web" :key="web.name">{{ web.name }}</a-radio-button>
            </a-radio-group>
        </slot>
        <a-tab-pane v-for="bank in banks" :key="bank.swiftBankCode" :tab="bank.swiftBankCode" />
    </a-tabs>
</template>

<script lang="ts">
import Bank from '@/settings/interfaces/bank';
import Web from '@/settings/interfaces/web';
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
    get webs(): Web[] {
        return this.$store.state.settingsModule.webs;
    }

    get banks(): Bank[] {
        return this.$store.state.settingsModule.banks;
    }

    get selectedBank(): Bank {
        return this.$store.state.tabModule.selectedBank;
    }

    get selectedWeb(): Web {
        return this.$store.state.tabModule.selectedWeb;
    }

    get getBankBySwiftBankCode(): Function {
        return this.$store.getters['settingsModule/bankBySwiftBankCode'];
    }

    private handleBankClick(swiftBankCode: string): void {
        this.$store.commit('tabModule/setSelectedBank', this.getBankBySwiftBankCode(swiftBankCode));
        this.$store.commit('scriptModule/setScripts', undefined);
        this.$store.dispatch('scriptModule/fetchScripts');
    }

    private handleWebClick({ target }: Event): void {
        this.$store.commit('tabModule/setSelectedWeb', (target as HTMLInputElement).value);
        this.$store.commit('scriptModule/setScripts', undefined);
        this.$store.dispatch('scriptModule/fetchScripts');
    }
}
</script>
