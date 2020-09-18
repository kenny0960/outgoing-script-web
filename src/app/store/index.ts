import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import RootState from '@/app/store/state';
import menuModule from '@/menu/store/module';
import settingsModule from '@/settings/store/module';
import uploadModule from '@/upload/store/module';
import scriptModule from '@/script/store/module';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    modules: {
        menuModule,
        settingsModule,
        uploadModule,
        scriptModule,
    },
};

export default new Vuex.Store<RootState>(store);
