import defaultPagination from '@/script/instances/defaultPagination';
import Pagination from '@/script/interfaces/Pagination';
import Script from '@/script/interfaces/Script';

export interface ScriptState {
    scripts: Script[] | undefined;
    pagination: Pagination;
}

const state = (): ScriptState => {
    return {
        scripts: undefined,
        pagination: defaultPagination,
    };
};

export default state;
