import { getCurrentDatetimeString } from '@/common/classes/datetime';
import Bank from '@/settings/interfaces/bank';
import Web from '@/settings/interfaces/web';
import { DEVELOP_WEB } from '@/settings/consts/webs';

export interface UploadState {
    bank: undefined | Bank;
    script: string;
    note: string;
    webs: Web[];
    isStable: boolean;
}

const state = (): UploadState => {
    return {
        bank: undefined,
        script: '',
        note: getCurrentDatetimeString(),
        webs: [DEVELOP_WEB],
        isStable: true,
    };
};

export default state;
