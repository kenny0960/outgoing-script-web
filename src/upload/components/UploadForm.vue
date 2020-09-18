<template>
    <a-form-model
        ref="uploadForm"
        :model="uploadState"
        :rules="rules"
        :label-col="{ span: 2 }"
        :wrapper-col="{ span: 20 }"
    >
        <a-form-model-item label="網站" prop="webs">
            <a-checkbox-group v-model="uploadState.webs" :disabled="isUploading">
                <a-checkbox v-for="web in webs" :key="web.name" :value="web">
                    {{ web.name }}
                </a-checkbox>
            </a-checkbox-group>
        </a-form-model-item>
        <a-form-model-item label="腳本" prop="script">
            <a-input
                v-model="uploadState.script"
                type="textarea"
                :disabled="isUploading"
                @change="handleScriptChange"
            />
            <a-tag color="blue" v-if="uploadState.bank !== undefined">
                {{ uploadState.bank.name }}
            </a-tag>
        </a-form-model-item>
        <a-form-model-item label="備註" prop="note">
            <a-input-group compact>
                <a-input v-model="uploadState.note" class="note" :disabled="isUploading" />
            </a-input-group>
        </a-form-model-item>
        <a-form-model-item label="穩定版本" prop="isStable">
            <a-switch v-model="uploadState.isStable" :disabled="isUploading" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ offset: 2 }">
            <a-button type="primary" @click="submit" :loading="isUploading"> 上傳 </a-button>
            <a-button> 取消 </a-button>
        </a-form-model-item>
    </a-form-model>
</template>

<script lang="ts">
import Script from '@/script/interfaces/Script';
import Web from '@/settings/interfaces/web';
import { UploadState } from '@/upload/store/state';
import { FormModel } from 'ant-design-vue';
import { Component, Vue } from 'vue-property-decorator';
import Bank from '@/settings/interfaces/bank';

@Component({})
export default class extends Vue {
    private isUploading = false;
    private rules = {
        webs: [
            {
                type: 'array',
                required: true,
                message: '至少選擇一個網站',
                trigger: 'blur',
            },
        ],
        script: [{ required: true, message: '腳本不能為空', trigger: 'blur' }],
        note: [{ required: true, message: '備註不能為空', trigger: 'blur' }],
    };

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

    private async submit(): Promise<void> {
        (this.$refs.uploadForm as FormModel).validate(
            async (isValid: boolean): Promise<void> => {
                if (isValid) {
                    this.isUploading = true;
                    for (const web of this.uploadState.webs) {
                        const script: Script = await this.$store.dispatch('uploadModule/createScript', web);

                        if (this.uploadState.isStable) {
                            await this.$store.dispatch('uploadModule/setScriptStabled', { web, script });
                        }
                    }
                    this.isUploading = false;
                }
            }
        );
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
