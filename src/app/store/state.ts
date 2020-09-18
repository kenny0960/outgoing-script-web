import { MenuState } from '@/menu/store/state';
import { ScriptState } from '@/script/store/state';
import { SettingsState } from '@/settings/store/state';
import { UploadState } from '@/upload/store/state';

interface RootState {
    menuModule: MenuState;
    settingsModule: SettingsState;
    uploadModule: UploadState;
    scriptModule: ScriptState;
}

export default RootState;
