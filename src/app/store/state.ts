import { MenuState } from '@/menu/store/state';
import { SettingsState } from '@/settings/store/state';

interface RootState {
    menuModule: MenuState;
    settingsModule: SettingsState;
}

export default RootState;
