import RootState from '@/app/store/state';
import Script from '@/script/interfaces/Script';
import { message } from 'ant-design-vue';
import axios, { AxiosResponse } from 'axios';
import { ActionTree } from 'vuex';
import { ScriptState } from '@/script/store/state';

const actions: ActionTree<ScriptState, RootState> = {
    async fetchScripts({ rootState, commit }): Promise<void> {
        try {
            const response: AxiosResponse = await axios({
                method: 'GET',
                url: `${rootState.tabModule.selectedWeb.uri}/api/v1/banks/${rootState.tabModule.selectedBank.swiftBankCode}/scripts`,
                headers: {
                    Authorization: rootState.tabModule.selectedWeb.token,
                },
            });

            if (response.status === 200) {
                message.success(
                    `取得「${rootState.tabModule.selectedWeb.name} - ${rootState.tabModule.selectedBank.name}」腳本成功`
                );
            }

            const scripts: Script[] = [];
            for (const script of response.data) {
                scripts.push({
                    revision: script.revision,
                    entryUrl: script.entry_url,
                    content: script.script_content,
                    isStable: script.stabled,
                    note: script.note,
                });
            }

            commit('setScripts', scripts);
        } catch (error) {
            message.error(
                `取得「${rootState.tabModule.selectedWeb.name} - ${rootState.tabModule.selectedBank.name}」腳本失敗：${error.message}`
            );
        }
    },
};

export default actions;
