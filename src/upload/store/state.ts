import { getCurrentDatetimeString } from '@/common/classes/datetime';
import UploadForm from '@/upload/interfaces/UploadForm';
import { ESB_WEB } from '@/settings/consts/webs';

export interface UploadState {
    uploadForm: UploadForm;
}

const state = (): UploadState => {
    return {
        uploadForm: {
            bank: undefined,
            script: '',
            notePrefix: ESB_WEB.name,
            notePostfix: getCurrentDatetimeString(),
            webs: [ESB_WEB],
            isStable: true,
        },
    };
};

export default state;
