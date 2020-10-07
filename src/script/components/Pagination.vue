<template>
    <a-pagination
        class="pagination"
        :pageSize="pagination.pageSize"
        :current="pagination.current"
        :total="pagination.total"
        @change="handleCurrentChange"
    />
</template>

<script lang="ts">
import Pagination from '@/script/interfaces/Pagination';
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
    get pagination(): Pagination {
        return this.$store.state.scriptModule.pagination;
    }

    private handleCurrentChange(current: number) {
        this.$store.commit('scriptModule/setPagination', {
            ...this.pagination,
            current: current,
        });
        this.$store.commit('scriptModule/setScripts', undefined);
        this.$store.dispatch('scriptModule/fetchScripts');
    }
}
</script>

<style scoped>
.pagination {
    text-align: center;
}
</style>
