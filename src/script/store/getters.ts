import { GetterTree } from 'vuex';
import RootState from '@/app/store/state';
import { ScriptState } from '@/script/store/state';

const getters: GetterTree<ScriptState, RootState> = {
    isLoading({ scripts }: ScriptState): boolean {
        return scripts === undefined;
    },
};

export default getters;
