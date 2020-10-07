import Script from '@/script/interfaces/Script';
import Bank from '@/settings/interfaces/bank';
import { GetterTree } from 'vuex';
import RootState from '@/app/store/state';
import { ScriptState } from '@/script/store/state';

const getters: GetterTree<ScriptState, RootState> = {
    isLoading({ scripts }: ScriptState): boolean {
        return scripts === undefined;
    },

    decodedContent: () => (script: Script): string => {
        return decodeURIComponent(escape(atob(script.content)));
    },

    verified: (state, getters, rootState) => (script: Script): boolean => {
        const bank: Bank = rootState.tabModule.selectedBank;
        return getters['decodedContent'](script).indexOf(bank.name) !== -1;
    },

    size: (state, getters) => (script: Script): number => {
        return Math.floor((getters['decodedContent'](script).length / 1024) * 100) / 100;
    },
};

export default getters;
