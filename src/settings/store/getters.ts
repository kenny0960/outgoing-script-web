import { DEFAULT_BANK } from '@/settings/consts/banks';
import Bank from '@/settings/interfaces/bank';
import { GetterTree } from 'vuex';
import RootState from '@/app/store/state';
import { SettingsState } from '@/settings/store/state';

const getters: GetterTree<SettingsState, RootState> = {
    bankBySwiftBankCode: ({ banks }: SettingsState) => (swiftBankCode: string): Bank => {
        for (const bank of banks) {
            if (bank.swiftBankCode === swiftBankCode) {
                return bank;
            }
        }
        return DEFAULT_BANK;
    },
};

export default getters;
