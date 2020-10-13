<template>
    <a-pagination
        class="pagination"
        show-size-changer
        :pageSizeOptions="['4', '8', '12', '16']"
        :pageSize="pagination.pageSize"
        :current="pagination.current"
        :total="pagination.total"
        @change="handleCurrentChange"
        @showSizeChange="handlePageSizeChange"
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

    private handlePageSizeChange(current: number, pageSize: number) {
        this.$store.commit('scriptModule/setPagination', {
            ...this.pagination,
            current: current,
            pageSize: pageSize,
        });
        this.$store.commit('scriptModule/setScripts', undefined);
        this.$store.dispatch('scriptModule/fetchScripts');
    }
}
</script>

<style scoped>
.pagination {
    margin-top: 50px;
    text-align: center;
}
</style>
