import { MutationTree } from 'vuex';
import { StableScriptState } from '@/stableScript/store/state';
import Script from '@/script/interfaces/Script';

const mutations: MutationTree<StableScriptState> = {
    setStableScript(state: StableScriptState, stableScript: Script): void {
        state.stableScripts.push(stableScript);
    },
};

export default mutations;
