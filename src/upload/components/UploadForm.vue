<template>
    <a-form-model :model="uploadForm" :label-col="{ span: 2 }" :wrapper-col="{ span: 20 }">
        <a-form-model-item label="網站">
            <a-checkbox-group v-model="uploadForm.webs">
                <a-checkbox v-for="web in webs" :key="web.name" :value="web">
                    {{ web.name }}
                </a-checkbox>
            </a-checkbox-group>
        </a-form-model-item>
        <a-form-model-item label="腳本">
            <a-input v-model="uploadForm.script" type="textarea" @change="handleScriptChange" />
            <a-tag color="blue" v-if="uploadForm.bank !== undefined">
                {{ uploadForm.bank.name }}
            </a-tag>
        </a-form-model-item>
        <a-form-model-item label="備註">
            <a-input-group compact>
                <a-select v-model="uploadForm.notePrefix">
                    <a-select-option v-for="web in webs" :key="web.name" :value="web.name">
                        {{ web.name }}
                    </a-select-option>
                </a-select>
                <a-input v-model="uploadForm.notePostfix" class="not-postfix" />
            </a-input-group>
        </a-form-model-item>
        <a-form-model-item label="穩定版本">
            <a-switch v-model="uploadForm.isStable" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ offset: 2 }">
            <a-button type="primary" @click="submit"> 上傳 </a-button>
            <a-button> 取消 </a-button>
        </a-form-model-item>
    </a-form-model>
</template>

<script lang="ts">
import Web from '@/settings/interfaces/web';
import UploadForm from '@/upload/interfaces/UploadForm';
import { Component, Vue } from 'vue-property-decorator';
import Bank from '@/settings/interfaces/bank';
import { AxiosResponse } from 'axios';

@Component({})
export default class extends Vue {
    get uploadForm(): UploadForm {
        return this.$store.state.uploadModule.uploadForm;
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

        this.$store.commit('uploadModule/setUploadFormBank', uploadFormBank);
    }

    private submit(): void {
        for (const web of this.uploadForm.webs) {
            this.$store
                .dispatch('uploadModule/createScript', web)
                .then((response: AxiosResponse): void => {
                    if (response.status === 201) {
                        this.$message.success(`上傳「${web.name} - ${this.uploadForm.bank?.name}」腳本成功`);
                    }
                })
                .catch((error): void => {
                    this.$message.error(
                        `上傳「${web.name} - ${this.uploadForm.bank?.name}」腳本失敗：${error.message}`
                    );
                });
        }
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
