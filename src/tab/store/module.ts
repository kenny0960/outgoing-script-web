import { Module } from 'vuex';
import state, { TabState } from '@/tab/store/state';
import getters from '@/tab/store/getters';
import actions from '@/tab/store/actions';
import mutations from '@/tab/store/mutations';
import RootState from '@/app/store/state';

const namespaced = true;

const tabModule: Module<TabState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};

export default tabModule;
