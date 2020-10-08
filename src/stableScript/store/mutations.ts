import { MutationTree } from 'vuex';
import { StableScriptState } from '@/stableScript/store/state';
import Script from '@/script/interfaces/Script';

const mutations: MutationTree<StableScriptState> = {
    appendStableScript(state: StableScriptState, stableScript: Script): void {
        state.stableScripts.push(stableScript);
    },

    resetStableScripts(state: StableScriptState): void {
        state.stableScripts = [];
    },
};

export default mutations;
