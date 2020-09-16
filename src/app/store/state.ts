import { MenuState } from '@/menu/store/state';
import { SettingsState } from '@/settings/store/state';
import { ScriptState } from '@/script/store/state';

interface RootState {
    menuModule: MenuState;
    settingsModule: SettingsState;
    scriptModule: ScriptState;
}

export default RootState;
