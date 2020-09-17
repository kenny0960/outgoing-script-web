import Web from '@/settings/interfaces/web';
import { ActionTree } from 'vuex';
import RootState from '@/app/store/state';
import { ScriptState } from '@/script/store/state';
import axios, { AxiosPromise } from 'axios';

const actions: ActionTree<ScriptState, RootState> = {
    createScript({ state }, web: Web): AxiosPromise {
        return axios({
            method: 'POST',
            url: `${web.uri}/api/v1/banks/${state.uploadForm.bank?.swiftBankCode}/scripts`,
            headers: {
                Authorization: web.token,
                'Content-type': 'application/json',
            },
            data: JSON.stringify({
                /* eslint-disable @typescript-eslint/camelcase */
                entry_url: state.uploadForm.bank?.entryUrl,
                script_content: state.uploadForm.script,
                note: `${state.uploadForm.notePrefix}-V${state.uploadForm.notePostfix}`,
                /* eslint-enable @typescript-eslint/camelcase */
            }),
        });
    },
};

export default actions;
