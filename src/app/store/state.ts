import { MenuState } from '@/menu/store/state';
import { ScriptState } from '@/script/store/state';
import { SettingsState } from '@/settings/store/state';
import { TabState } from '@/tab/store/state';
import { UploadState } from '@/upload/store/state';
import { StableScriptState } from '@/stableScript/store/state';

interface RootState {
    menuModule: MenuState;
    settingsModule: SettingsState;
    uploadModule: UploadState;
    scriptModule: ScriptState;
    stableScriptModule: StableScriptState;
    tabModule: TabState;
}

export default RootState;
