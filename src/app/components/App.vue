<template>
    <a-layout id="app">
        <Menu />
        <a-layout>
            <a-layout-content id="content">
                <router-view />
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                <a-icon type="copyright" /> 2020 Created by KENNY
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from '@/menu/components/Menu.vue';

@Component({
    components: {
        Menu,
    },
})
export default class extends Vue {}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 18px;
    height: 100%;
}

#content {
    margin: 15px 15px 0px;
    padding: 24px;
    background-color: white;
    min-height: 780px;
}
</style>
