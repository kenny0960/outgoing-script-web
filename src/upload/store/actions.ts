import Script from '@/script/interfaces/Script';
import Web from '@/settings/interfaces/web';
import { message } from 'ant-design-vue';
import { ActionTree } from 'vuex';
import RootState from '@/app/store/state';
import { UploadState } from '@/upload/store/state';
import axios, { AxiosResponse } from 'axios';

const actions: ActionTree<UploadState, RootState> = {
    async createScript({ state }, web: Web): Promise<Script | undefined> {
        try {
            const response: AxiosResponse = await axios({
                method: 'POST',
                url: `${web.uri}/api/v1/banks/${state.bank?.swiftBankCode}/scripts`,
                headers: {
                    Authorization: web.token,
                    'Content-type': 'application/json',
                },
                data: JSON.stringify({
                    /* eslint-disable @typescript-eslint/camelcase */
                    entry_url: state.bank?.entryUrl,
                    script_content: state.script,
                    note: `${web.name}-V${state.note}`,
                    /* eslint-enable @typescript-eslint/camelcase */
                }),
            });

            if (response.status === 201) {
                message.success(`上傳「${web.name} - ${state.bank?.name}」腳本成功`);
            }

            const script: Script = {
                revision: response.data.revision,
                entryUrl: response.data.entry_url,
                content: response.data.script_content,
                isStabled: response.data.stabled,
                note: response.data.note,
            };

            return script;
        } catch (error) {
            message.error(`上傳「${web.name} - ${state.bank?.name}」腳本失敗：${error.message}`);
        }
    },

    async setScriptStabled({ state }, { web, script }): Promise<void> {
        try {
            const response: AxiosResponse = await axios({
                method: 'PUT',
                url: `${web.uri}/api/v1/banks/${state.bank?.swiftBankCode}/scripts/${script.revision}/stable`,
                headers: {
                    Authorization: web.token,
                },
            });

            if (response.status === 204) {
                message.success(`設定「${web.name} - ${state.bank?.name}」穩定版本成功`);
            }
        } catch (error) {
            message.error(`設定「${web.name} - ${state.bank?.name}」穩定版本失敗：${error.message}`);
        }
    },
};

export default actions;
