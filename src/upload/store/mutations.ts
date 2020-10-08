import Bank from '@/settings/interfaces/bank';
import { MutationTree } from 'vuex';
import { defaultUploadState, UploadState } from '@/upload/store/state';

const mutations: MutationTree<UploadState> = {
    setBank(state: UploadState, bank: Bank | undefined): void {
        state.bank = bank;
    },

    resetState(state: UploadState): void {
        state.bank = defaultUploadState.bank;
        state.script = defaultUploadState.script;
        state.note = defaultUploadState.note;
        state.webs = defaultUploadState.webs;
        state.isStabled = defaultUploadState.isStabled;
    },
};

export default mutations;
