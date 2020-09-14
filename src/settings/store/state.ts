import Bank from '@/settings/interfaces/bank'
import Web from '@/settings/interfaces/web'

export interface SettingsState {
    webs: Web[];
    banks: Bank[];
}

const state = (): SettingsState => {
    return {
        webs: [],
        banks: []
    };
};

export default state;
