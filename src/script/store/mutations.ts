import Pagination from '@/script/interfaces/Pagination';
import Script from '@/script/interfaces/Script';
import { MutationTree } from 'vuex';
import { ScriptState, defaultScriptState } from '@/script/store/state';

const mutations: MutationTree<ScriptState> = {
    setScripts(state: ScriptState, scripts: Script[]): void {
        state.scripts = scripts;
    },

    setPagination(state: ScriptState, pagination: Pagination): void {
        state.pagination = pagination;
    },

    resetPagination(state: ScriptState): void {
        state.pagination = defaultScriptState.pagination;
    },

    resetScripts(state: ScriptState): void {
        state.scripts = defaultScriptState.scripts;
    },

    resetState(state: ScriptState): void {
        state.pagination = defaultScriptState.pagination;
        state.scripts = defaultScriptState.scripts;
    },
};

export default mutations;
