import { getCurrentDatetimeString } from '@/common/classes/datetime';
import UploadForm from '@/script/interfaces/UploadForm';
import { ESB_WEB } from '@/settings/consts/webs';

export interface ScriptState {
    uploadForm: UploadForm;
}

const state = (): ScriptState => {
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
