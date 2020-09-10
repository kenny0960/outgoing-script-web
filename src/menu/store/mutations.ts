import { MutationTree } from 'vuex';
import { MenuState } from '@/menu/store/state';

const mutations: MutationTree<MenuState> = {
    setCollapsed(state: MenuState, isCollapsed: boolean): void {
        state.isCollapsed = isCollapsed;
    }
};

export default mutations;
