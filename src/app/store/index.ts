import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import RootState from '@/app/store/state';
import menuModule from '@/menu/store/module';
import settingsModule from '@/settings/store/module';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    menuModule,
    settingsModule
  }
};

export default new Vuex.Store<RootState>(store);
