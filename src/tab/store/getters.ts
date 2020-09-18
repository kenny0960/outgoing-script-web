import { GetterTree } from 'vuex';
import RootState from '@/app/store/state';
import { TabState } from '@/tab/store/state';

const getters: GetterTree<TabState, RootState> = {};

export default getters;
