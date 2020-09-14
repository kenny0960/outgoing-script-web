<template>
  <a-form-model :model="form" :label-col="{ span: 2 }" :wrapper-col="{ span: 20 }">
    <a-form-model-item label="腳本">
      <a-input v-model="form.script" type="textarea" />
    </a-form-model-item>
    <a-form-model-item label="備註">
      <a-input-group compact>
        <a-select v-model="form.notePrefix">>
          <a-select-option
            v-for="(web) in webs"
            :key="web.name"
            :value="web.name"
          >
            {{ web.name }}
          </a-select-option>
        </a-select>
        <a-input v-model="form.notePostfix" class="not-postfix" />
      </a-input-group>
    </a-form-model-item>
    <a-form-model-item label="網站">
      <a-checkbox-group v-model="form.webs">
        <a-checkbox
          v-for="(web) in webs"
          :key="web.name"
          :value="web"
        >
          {{ web.name }}
        </a-checkbox>
      </a-checkbox-group>
    </a-form-model-item>
    <a-form-model-item label="穩定版本">
      <a-switch v-model="form.isStable" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ offset: 2 }">
      <a-button type="primary" @click="submit">
        上傳
      </a-button>
      <a-button>
        取消
      </a-button>
    </a-form-model-item>
  </a-form-model>
</template>

<script lang="ts">
  import { getCurrentDatetimeString } from '@/common/classes/datetime'
  import { ESB_WEB } from '@/settings/consts/webs'
  import Web from '@/settings/interfaces/web'
  import { Component, Vue } from 'vue-property-decorator';

  @Component({})
  export default class extends Vue {
    private form: object = {
      script: '',
      notePrefix: ESB_WEB.name,
      notePostfix: getCurrentDatetimeString(),
      webs: [ESB_WEB],
      isStable: true
    };

    get webs(): Web[] {
      return this.$store.state.settingsModule.webs;
    }

    private submit() {
      // TODO 實作送出功能
      console.log('submit!', this.form);
    }
  }
</script>

<style scoped>
  .not-postfix {
    max-width: 100px;
  }

  .ant-btn:not(nth-last-child) {
    margin-right: 10px;
  }
</style>
