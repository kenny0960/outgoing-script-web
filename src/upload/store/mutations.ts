import Bank from '@/settings/interfaces/bank';
import { MutationTree } from 'vuex';
import { UploadState } from '@/upload/store/state';

const mutations: MutationTree<UploadState> = {
    setBank(state: UploadState, bank: Bank | undefined): void {
        state.bank = bank;
    },
};

export default mutations;
