<template>
  <a-layout id="app">
    <a-layout-sider>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="upload" />
          <span>上傳腳本</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="unordered-list" />
          <span>列表</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="setting" />
          <span>設置</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
        <a-icon class="trigger" type="menu-unfold" />
      </a-layout-header>
      <a-layout-content id="content">
        HELLO WORLD
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        <a-icon type="copyright" /> 2020 Created by KENNY
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 18px;
  }

  #app .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #app .trigger:hover {
    color: #1890ff;
  }

  #app .logo {
    height: 32px;
    margin: 16px;
  }

  #content {
    margin: 24px 16px 0px;
    padding: 24px;
    background-color: white;
    min-height: 780px;
  }
</style>
