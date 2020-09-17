import Bank from '@/settings/interfaces/bank';
import { MutationTree } from 'vuex';
import { ScriptState } from '@/script/store/state';

const mutations: MutationTree<ScriptState> = {
    setUploadFormBank(state: ScriptState, bank: Bank | undefined): void {
        state.uploadForm.bank = bank;
    },
};

export default mutations;
