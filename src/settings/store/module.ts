import { Module } from 'vuex';
import state, { SettingsState } from '@/settings/store/state';
import getters from '@/settings/store/getters';
import actions from '@/settings/store/actions';
import mutations from '@/settings/store/mutations';
import RootState from '@/app/store/state';

const namespaced = true;

const settingsModule: Module<SettingsState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};

export default settingsModule;
