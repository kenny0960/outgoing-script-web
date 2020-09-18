import { ABOC } from '@/settings/consts/banks';
import { DEVELOP_WEB } from '@/settings/consts/webs';
import Bank from '@/settings/interfaces/bank';
import Web from '@/settings/interfaces/web';

export interface TabState {
    selectedWeb: Web;
    selectedBank: Bank;
}

const state = (): TabState => {
    return {
        selectedWeb: DEVELOP_WEB,
        selectedBank: ABOC,
    };
};

export default state;
