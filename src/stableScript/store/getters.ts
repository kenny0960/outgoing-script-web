import Bank from '@/settings/interfaces/bank';
import { GetterTree } from 'vuex';
import RootState from '@/app/store/state';
import { StableScriptState } from '@/stableScript/store/state';

const getters: GetterTree<StableScriptState, RootState> = {
    isLoading({ stableScripts }: StableScriptState, getters, rootState): boolean {
        const banks: Bank[] = rootState.settingsModule.banks;
        return stableScripts.length !== banks.length;
    },
};

export default getters;
