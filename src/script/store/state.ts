import Script from '@/script/interfaces/Script';

export interface ScriptState {
    scripts: Script[] | undefined;
}

const state = (): ScriptState => {
    return {
        scripts: undefined,
    };
};

export default state;
