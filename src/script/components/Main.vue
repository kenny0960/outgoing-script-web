<template>
    <a-skeleton v-if="isLoading" active :paragraph="{ rows: 5 }" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
    public mounted(): void {
        this.$store.dispatch('scriptModule/fetchScripts');
    }

    get isLoading(): boolean {
        return this.$store.getters['scriptModule/isLoading'];
    }
}
</script>
