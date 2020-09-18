import Script from '@/script/interfaces/Script';
import { MutationTree } from 'vuex';
import { ScriptState } from '@/script/store/state';

const mutations: MutationTree<ScriptState> = {
    setScripts(state: ScriptState, scripts: Script[]): void {
        state.scripts = scripts;
    },
};

export default mutations;
