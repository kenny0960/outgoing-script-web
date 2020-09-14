import Bank from '@/settings/interfaces/bank'
import { ABOC, FJIB, ICBK, MSBC, PCBC, SPDB, SZDB } from '@/settings/consts/banks'
import Web from '@/settings/interfaces/web'
import { CG_PAY_WEB, DEVELOP_WEB, DOUBLE_DRAGON_WEB, ESB_WEB, LOCAL_WEB } from '@/settings/consts/webs';

export interface SettingsState {
    webs: Web[];
    banks: Bank[];
}

const state = (): SettingsState => {
    return {
        webs: [
            LOCAL_WEB,
            DEVELOP_WEB,
            ESB_WEB,
            DOUBLE_DRAGON_WEB,
            CG_PAY_WEB
        ],
        banks: [
            ABOC,
            ICBK,
            PCBC,
            MSBC,
            SPDB,
            SZDB,
            FJIB
        ]
    };
};

export default state;
