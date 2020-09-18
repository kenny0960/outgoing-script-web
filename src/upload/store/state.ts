import { getCurrentDatetimeString } from '@/common/classes/datetime';
import Bank from '@/settings/interfaces/bank';
import Web from '@/settings/interfaces/web';
import { DEVELOP_WEB } from '@/settings/consts/webs';

export interface UploadState {
    bank: undefined | Bank;
    script: string;
    notePrefix: string;
    notePostfix: string;
    webs: Web[];
    isStable: boolean;
}

const state = (): UploadState => {
    return {
        bank: undefined,
        script: '',
        notePrefix: DEVELOP_WEB.name,
        notePostfix: getCurrentDatetimeString(),
        webs: [DEVELOP_WEB],
        isStable: true,
    };
};

export default state;
