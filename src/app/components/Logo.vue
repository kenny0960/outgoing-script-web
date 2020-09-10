<template>
  <div id="logo">
    <span class="logo-text">{{ isCollapsed ? '' : '腳本管理' }}</span>
    <a-button
      class="menu-folder"
      :icon="isCollapsed ? 'menu-unfold' : 'menu-fold'"
      type="link"
      @click="switchCollapsed"
    />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class extends Vue {
    get isCollapsed(): boolean {
      return this.$store.state.menuModule.isCollapsed;
    }

    private switchCollapsed(): void {
      this.$store.commit('menuModule/setCollapsed', ! this.isCollapsed);
    }
  }
</script>

<style scoped>
  #logo {
    height: 32px;
    margin: 16px;
    display: flex;
    align-items: center;
  }

  .logo-text {
    color: white;
  }

  .menu-folder {
    margin-left: auto;
  }
</style>
