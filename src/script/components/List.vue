<template>
    <a-list :grid="{ gutter: 16, column: 4 }" :data-source="scripts">
        <a-list-item slot="renderItem" slot-scope="script">
            <a-card>
                <slot slot="title">
                    <a-tooltip v-if="verified(script)">
                        <template slot="title">已驗證</template>
                        <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" />
                    </a-tooltip>
                    <span class="revision">Revision {{ script.revision }}</span>
                </slot>
                <slot slot="extra">
                    <a-switch
                        size="small"
                        :checked="script.isStabled"
                        :disabled="script.isStabled"
                        checkedChildren="stable"
                    />
                </slot>
                <a-descriptions :column="1" class="script-detail">
                    <a-descriptions-item label="檔案大小">
                        {{ size(script) }} KB
                        <a-tooltip>
                            <template slot="title">複製腳本</template>
                            <a-button
                                type="link"
                                icon="copy"
                                v-clipboard:copy="decodedContent(script)"
                                v-clipboard:success="handleCopySuccess"
                                v-clipboard:error="handleCopyError"
                            />
                        </a-tooltip>
                    </a-descriptions-item>
                    <a-descriptions-item label="網銀入口">
                        <a target="_blank" :href="script.entryUrl">
                            <a-button type="link" icon="chrome" />
                        </a>
                    </a-descriptions-item>
                    <a-descriptions-item v-if="script.note">
                        <a-tag color="blue">{{ script.note }}</a-tag>
                    </a-descriptions-item>
                </a-descriptions>
            </a-card>
        </a-list-item>
    </a-list>
</template>

<script lang="ts">
import Script from '@/script/interfaces/Script';
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
    get scripts(): Script[] {
        return this.$store.state.scriptModule.scripts;
    }

    get verified(): Function {
        return this.$store.getters['scriptModule/verified'];
    }

    get size(): Function {
        return this.$store.getters['scriptModule/size'];
    }

    get decodedContent(): Function {
        return this.$store.getters['scriptModule/decodedContent'];
    }

    private handleCopySuccess(): void {
        this.$message.success(`複製腳本成功`);
    }

    private handleCopyError(): void {
        this.$message.error(`複製腳本失敗`);
    }
}
</script>

<style scoped>
.revision {
    padding-left: 10px;
}
</style>

<style>
.script-detail .ant-descriptions-row:last-child {
    text-align: right;
}
.script-detail .ant-descriptions-row > td {
    padding-bottom: 5px;
}
</style>
