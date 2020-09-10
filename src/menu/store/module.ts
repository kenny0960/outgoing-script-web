import { Module } from 'vuex';
import state, { MenuState } from '@/menu/store/state';
import getters from '@/menu/store/getters';
import actions from '@/menu/store/actions';
import mutations from '@/menu/store/mutations';
import RootState from '@/app/store/state';

const namespaced = true;

const menuModule: Module<MenuState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};

export default menuModule;
