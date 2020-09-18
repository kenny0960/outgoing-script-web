<template>
    <a-form-model :model="uploadState" :label-col="{ span: 2 }" :wrapper-col="{ span: 20 }">
        <a-form-model-item label="網站">
            <a-checkbox-group v-model="uploadState.webs">
                <a-checkbox v-for="web in webs" :key="web.name" :value="web">
                    {{ web.name }}
                </a-checkbox>
            </a-checkbox-group>
        </a-form-model-item>
        <a-form-model-item label="腳本">
            <a-input v-model="uploadState.script" type="textarea" @change="handleScriptChange" />
            <a-tag color="blue" v-if="uploadState.bank !== undefined">
                {{ uploadState.bank.name }}
            </a-tag>
        </a-form-model-item>
        <a-form-model-item label="備註">
            <a-input-group compact>
                <a-input v-model="uploadState.note" class="note" />
            </a-input-group>
        </a-form-model-item>
        <a-form-model-item label="穩定版本">
            <a-switch v-model="uploadState.isStable" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ offset: 2 }">
            <a-button type="primary" @click="submit"> 上傳 </a-button>
            <a-button> 取消 </a-button>
        </a-form-model-item>
    </a-form-model>
</template>

<script lang="ts">
import Web from '@/settings/interfaces/web';
import { UploadState } from '@/upload/store/state';
import { Component, Vue } from 'vue-property-decorator';
import Bank from '@/settings/interfaces/bank';
import { AxiosResponse } from 'axios';

@Component({})
export default class extends Vue {
    get uploadState(): UploadState {
        return this.$store.state.uploadModule;
    }

    get webs(): Web[] {
        return this.$store.state.settingsModule.webs;
    }

    get banks(): Bank[] {
        return this.$store.state.settingsModule.banks;
    }

    private handleScriptChange(event: InputEvent): void {
        const script: string = (event.target as HTMLTextAreaElement).value;
        let uploadFormBank: undefined | Bank = undefined;

        for (const bank of this.banks) {
            if (script.indexOf(bank.name) !== -1) {
                uploadFormBank = bank;
                break;
            }
        }

        this.$store.commit('uploadModule/setBank', uploadFormBank);
    }

    private submit(): void {
        for (const web of this.uploadState.webs) {
            this.$store
                .dispatch('uploadModule/createScript', web)
                .then((response: AxiosResponse): void => {
                    if (response.status === 201) {
                        this.$message.success(`上傳「${web.name} - ${this.uploadState.bank?.name}」腳本成功`);
                    }
                })
                .catch((error): void => {
                    this.$message.error(
                        `上傳「${web.name} - ${this.uploadState.bank?.name}」腳本失敗：${error.message}`
                    );
                });
        }
    }
}
</script>

<style scoped>
.note {
    max-width: 100px;
}

.ant-btn:not(nth-last-child) {
    margin-right: 10px;
}
</style>
