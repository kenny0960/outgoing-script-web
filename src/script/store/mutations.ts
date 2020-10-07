import Pagination from '@/script/interfaces/Pagination';
import Script from '@/script/interfaces/Script';
import { MutationTree } from 'vuex';
import { ScriptState } from '@/script/store/state';

const mutations: MutationTree<ScriptState> = {
    setScripts(state: ScriptState, scripts: Script[]): void {
        state.scripts = scripts;
    },

    setPagination(state: ScriptState, pagination: Pagination): void {
        state.pagination = pagination;
    },
};

export default mutations;
