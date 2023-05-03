import { ABOC } from '@/settings/consts/banks';
import { LOCAL_WEB } from '@/settings/consts/webs';
import Bank from '@/settings/interfaces/bank';
import Web from '@/settings/interfaces/web';

export interface TabState {
    selectedWeb: Web;
    selectedBank: Bank;
}

export const defaultTabState: TabState = {
    selectedWeb: LOCAL_WEB,
    selectedBank: ABOC,
};

const state = (): TabState => {
    return {
        ...defaultTabState,
    };
};

export default state;
