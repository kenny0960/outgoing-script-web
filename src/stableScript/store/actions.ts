import RootState from '@/app/store/state';
import Script from '@/script/interfaces/Script';
import Bank from '@/settings/interfaces/bank';
import { message } from 'ant-design-vue';
import axios, { AxiosResponse } from 'axios';
import { ActionTree } from 'vuex';
import { StableScriptState } from '@/stableScript/store/state';

const actions: ActionTree<StableScriptState, RootState> = {
    async fetchStableScript({ rootState, commit }, bank: Bank): Promise<void> {
        try {
            const response: AxiosResponse = await axios({
                method: 'GET',
                url: `${rootState.tabModule.selectedWeb.uri}/api/v1/banks/${bank.swiftBankCode}/scripts/stable`,
                headers: {
                    Authorization: rootState.tabModule.selectedWeb.token,
                },
            });

            if (response.status === 200) {
                const stableScript: Script = response.data;
                commit('setStableScript', stableScript);
            }
        } catch (error) {
            message.error(
                `取得「${rootState.tabModule.selectedWeb.name} - ${bank.name}」穩定版本腳本失敗：${error.message}`
            );
        }
    },
};

export default actions;
