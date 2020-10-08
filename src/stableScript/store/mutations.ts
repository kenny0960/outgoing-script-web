import { MutationTree } from 'vuex';
import { StableScriptState } from '@/stableScript/store/state';
import Script from '@/script/interfaces/Script';

const mutations: MutationTree<StableScriptState> = {
    appendStableScript(state: StableScriptState, stableScript: Script): void {
        state.stableScripts.push(stableScript);
    },

    updateStableScript(state: StableScriptState, script: Script): void {
        const scripts: Script[] = [];
        for (const index in state.stableScripts) {
            if (state.stableScripts[index].entryUrl === script.entryUrl) {
                scripts.push(script);
                continue;
            }
            scripts.push(state.stableScripts[index]);
        }
        state.stableScripts = scripts;
    },

    resetStableScripts(state: StableScriptState): void {
        state.stableScripts = [];
    },
};

export default mutations;
