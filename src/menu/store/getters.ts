import { GetterTree } from 'vuex';
import RootState from '@/app/store/state';
import { MenuState } from '@/menu/store/state';

const getters: GetterTree<MenuState, RootState> = {};

export default getters;
