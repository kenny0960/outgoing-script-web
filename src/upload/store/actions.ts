import Web from '@/settings/interfaces/web';
import { ActionTree } from 'vuex';
import RootState from '@/app/store/state';
import { UploadState } from '@/upload/store/state';
import axios, { AxiosPromise } from 'axios';

const actions: ActionTree<UploadState, RootState> = {
    createScript({ state }, web: Web): AxiosPromise {
        return axios({
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
    },

    setScriptStabled({ state }, { web, script }): AxiosPromise {
        return axios({
            method: 'PUT',
            url: `${web.uri}/api/v1/banks/${state.bank?.swiftBankCode}/scripts/${script.revision}/stable`,
            headers: {
                Authorization: web.token,
            },
        });
    },
};

export default actions;
