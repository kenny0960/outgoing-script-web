import Bank from '@/settings/interfaces/bank';
import { MutationTree } from 'vuex';
import { UploadState } from '@/upload/store/state';

const mutations: MutationTree<UploadState> = {
    setUploadFormBank(state: UploadState, bank: Bank | undefined): void {
        state.uploadForm.bank = bank;
    },
};

export default mutations;
