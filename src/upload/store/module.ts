import { Module } from 'vuex';
import state, { UploadState } from '@/upload/store/state';
import getters from '@/upload/store/getters';
import actions from '@/upload/store/actions';
import mutations from '@/upload/store/mutations';
import RootState from '@/app/store/state';

const namespaced = true;

const uploadModule: Module<UploadState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};

export default uploadModule;
