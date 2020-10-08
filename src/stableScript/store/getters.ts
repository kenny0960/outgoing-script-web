import { GetterTree } from 'vuex';
import RootState from '@/app/store/state';
import { StableScriptState } from '@/stableScript/store/state';

const getters: GetterTree<StableScriptState, RootState> = {};

export default getters;
