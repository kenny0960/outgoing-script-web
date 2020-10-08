import defaultPagination from '@/script/instances/defaultPagination';
import Pagination from '@/script/interfaces/Pagination';
import Script from '@/script/interfaces/Script';

export interface ScriptState {
    scripts: Script[] | undefined;
    pagination: Pagination;
}

export const defaultScriptState: ScriptState = {
    scripts: undefined,
    pagination: defaultPagination,
};

const state = (): ScriptState => {
    return {
        ...defaultScriptState,
    };
};

export default state;
