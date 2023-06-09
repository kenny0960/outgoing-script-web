import RootState from '@/app/store/state';
import Pagination from '@/script/interfaces/Pagination';
import Script from '@/script/interfaces/Script';
import { message } from 'ant-design-vue';
import axios, { AxiosResponse } from 'axios';
import { ActionTree } from 'vuex';
import { ScriptState } from '@/script/store/state';

const actions: ActionTree<ScriptState, RootState> = {
    async fetchScripts({ state, rootState, commit }): Promise<void> {
        const pagination: Pagination = state.pagination;

        try {
            const response: AxiosResponse = await axios({
                method: 'GET',
                url: `${rootState.tabModule.selectedWeb.uri}/api/v1/banks/${rootState.tabModule.selectedBank.swiftBankCode}/scripts?page=${pagination.current}&per_page=${pagination.pageSize}`,
                headers: {
                    Authorization: rootState.tabModule.selectedWeb.token,
                },
            });

            const scripts: Script[] = [];
            for (const script of response.data) {
                scripts.push({
                    revision: script.revision,
                    entryUrl: script.entry_url,
                    content: script.script_content,
                    isStabled: script.stabled,
                    note: script.note,
                });
            }

            commit('setScripts', scripts);
            commit('setPagination', {
                ...pagination,
                total: parseInt(response.headers['x-total']),
            });
        } catch (error) {
            message.error(
                `取得「${rootState.tabModule.selectedWeb.name} - ${rootState.tabModule.selectedBank.name}」腳本失敗：${error.message}`
            );
        }
    },

    async setScriptStabled({ rootState }, revision: number): Promise<void> {
        try {
            const response: AxiosResponse = await axios({
                method: 'PUT',
                url: `${rootState.tabModule.selectedWeb.uri}/api/v1/banks/${rootState.tabModule.selectedBank.swiftBankCode}/scripts/${revision}/stable`,
                headers: {
                    Authorization: rootState.tabModule.selectedWeb.token,
                },
            });

            if (response.status === 204) {
                message.success(
                    `設定「${rootState.tabModule.selectedWeb.name} - ${rootState.tabModule.selectedBank.name}」穩定版本成功`
                );
            }
        } catch (error) {
            message.error(
                `設定「${rootState.tabModule.selectedWeb.name} - ${rootState.tabModule.selectedBank.name}」穩定版本失敗：${error.message}`
            );
        }
    },
};

export default actions;
