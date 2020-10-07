<template>
    <a-pagination
        class="pagination"
        :pageSize="pagination.pageSize"
        :current="pagination.current"
        :total="pagination.total"
    />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
    get pagination(): boolean {
        return this.$store.state.scriptModule.pagination;
    }
}
</script>

<style scoped>
.pagination {
    text-align: center;
}
</style>
