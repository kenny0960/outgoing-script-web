import { Module } from 'vuex';
import state, { StableScriptState } from '@/stableScript/store/state';
import getters from '@/stableScript/store/getters';
import actions from '@/stableScript/store/actions';
import mutations from '@/stableScript/store/mutations';
import RootState from '@/app/store/state';

const namespaced = true;

const stableScriptModule: Module<StableScriptState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};

export default stableScriptModule;
