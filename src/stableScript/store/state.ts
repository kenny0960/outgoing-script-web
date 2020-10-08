import Script from '@/script/interfaces/Script';

export interface StableScriptState {
    stableScripts: Script[];
}

const state = (): StableScriptState => {
    return {
        stableScripts: [],
    };
};

export default state;
