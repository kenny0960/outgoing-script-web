import { GetterTree } from 'vuex';
import RootState from '@/app/store/state';
import { SettingsState } from '@/settings/store/state';

const getters: GetterTree<SettingsState, RootState> = {};

export default getters;
