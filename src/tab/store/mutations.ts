import Bank from '@/settings/interfaces/bank';
import Web from '@/settings/interfaces/web';
import { MutationTree } from 'vuex';
import { TabState } from '@/tab/store/state';

const mutations: MutationTree<TabState> = {
    setSelectedWeb(state: TabState, web: Web): void {
        state.selectedWeb = web;
    },

    setSelectedBank(state: TabState, bank: Bank): void {
        state.selectedBank = bank;
    },
};

export default mutations;
