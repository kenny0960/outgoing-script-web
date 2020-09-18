<template>
    <a-layout-sider v-model="isCollapsed" :trigger="null" collapsible>
        <div id="logo">
            <span class="logo-text">{{ isCollapsed ? '...' : '腳本管理' }}</span>
            <a-button
                class="menu-folder"
                :icon="isCollapsed ? 'menu-unfold' : 'menu-fold'"
                type="link"
                @click="switchCollapsed"
            />
        </div>
        <a-menu @click="handleMenuClick" theme="dark" mode="inline" :default-selected-keys="['upload']">
            <a-menu-item key="upload">
                <a-icon type="upload" />
                <span>上傳腳本</span>
            </a-menu-item>
            <a-menu-item key="list">
                <a-icon type="unordered-list" />
                <span>列表</span>
            </a-menu-item>
            <a-menu-item key="settings">
                <a-icon type="setting" />
                <span>設置</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
    get isCollapsed(): boolean {
        return this.$store.state.menuModule.isCollapsed;
    }

    private switchCollapsed(): void {
        this.$store.commit('menuModule/setCollapsed', !this.isCollapsed);
    }

    // eslint-disable-next-line
    private handleMenuClick({ key, item }: any): void {
        // 避免路由相同路徑
        if (item.$el.classList.contains('ant-menu-item-selected')) {
            return;
        }
        this.$router.push(key);
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
