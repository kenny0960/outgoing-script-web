import Bank from '@/settings/interfaces/bank'
import Web from '@/settings/interfaces/web'

interface UploadForm {
    bank: undefined | Bank;
    script: string;
    notePrefix: string;
    notePostfix: string;
    webs: Web[];
    isStable: boolean;
}

export default UploadForm;
