import Web from '@/settings/interfaces/web'

interface UploadForm {
    script: string;
    notePrefix: string;
    notePostfix: string;
    webs: Web[];
    isStable: boolean;
}

export default UploadForm;
