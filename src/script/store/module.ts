import { Module } from 'vuex';
import state, { ScriptState } from '@/script/store/state';
import getters from '@/script/store/getters';
import actions from '@/script/store/actions';
import mutations from '@/script/store/mutations';
import RootState from '@/app/store/state';

const namespaced = true;

const scriptModule: Module<ScriptState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};

export default scriptModule;
