<template>
    <fragment>
        <Tab v-if="isStableScriptsLoading === false" />
        <a-skeleton v-if="isScriptsLoading" active :paragraph="{ rows: 5 }" />
        <fragment v-else>
            <List />
            <Pagination />
        </fragment>
    </fragment>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tab from '@/tab/components/Tab.vue';
import List from '@/script/components/List.vue';
import Pagination from '@/script/components/Pagination.vue';

@Component({
    components: {
        Tab,
        List,
        Pagination,
    },
})
export default class extends Vue {
    public beforeMount(): void {
        this.$store.commit('tabModule/resetState');
        this.$store.commit('scriptModule/resetState');
    }

    public async mounted(): Promise<void> {
        await this.$store.dispatch('stableScriptModule/fetchStableScripts');
        await this.$store.dispatch('scriptModule/fetchScripts');
    }

    get isScriptsLoading(): boolean {
        return this.$store.getters['scriptModule/isLoading'];
    }

    get isStableScriptsLoading(): boolean {
        return this.$store.getters['stableScriptModule/isLoading'];
    }
}
</script>
