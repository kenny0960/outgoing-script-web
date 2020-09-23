<template>
    <a-skeleton v-if="isScriptsLoading" active :paragraph="{ rows: 5 }" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
    public mounted(): void {
        this.fetchScripts();
    }

    get isScriptsLoading(): boolean {
        return this.$store.getters['scriptModule/isLoading'];
    }

    public fetchScripts(): void {
        this.$store.dispatch('scriptModule/fetchScripts');
    }
}
</script>
