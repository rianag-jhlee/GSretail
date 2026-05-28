<template>
    <div class="file_upload">
        <!-- PC: 드래그앤드롭 영역 -->
        <div
            class="drop_zone"
            :class="{ 'is-dragging': isDragging }"
            @dragover.prevent="onDragOver"
            @dragleave="onDragLeave"
            @drop.prevent="onDrop"
            @click="triggerInput"
        >
            <span class="drop_zone_icon" aria-hidden="true"><img src="@/assets/images/sub/icon_file_32.png" alt="file"></span>
            <p class="drop_zone_text" v-html="t.dropZoneDesc"></p>
            <button type="button" class="btn_mid btn_icon_more after" @click.stop="triggerInput">
                {{ t.dropZoneBtnLabel }}
            </button>
        </div>

        <!-- Mobile: 파일찾기 인풋 스타일 -->
        <div class="file_input_row" @click="triggerInput">
            <span class="file_input_row_name">{{ fileName }}</span>
            <button type="button" class="btn_small" @click.stop="triggerInput">{{ t.dropZoneBtnLabel2 }}</button>
        </div>

        <!-- 실제 input -->
        <input
            ref="inputRef"
            type="file"
            class="hidden_input"
            :multiple="multiple"
            :accept="accept"
            @change="onFileChange"
        />

        <!-- 선택된 파일 목록 -->
        <ul v-if="files.length" class="file_list">
            <li v-for="(file, i) in files" :key="i" class="file_list_item">
                <span class="file_list_name">{{ file.name }}</span>
                <span class="file_list_size">{{ formatSize(file.size) }}</span>
                <button type="button" class="file_list_remove" @click="removeFile(i)">✕</button>
            </li>
        </ul>

        <!-- 용량 초과 알림 -->
        <p v-if="showSizeError" class="file_error_msg">{{ t.overSizeMsg }}</p>

        <!-- 파일 없음 안내 
        <p v-else class="file_empty_msg">{{ t.emptyMsg }}</p>-->
    </div>
</template>

<script>
export default {
    name: "FileUpload",
    props: {
        lang: { type: String, default: "ko" },
        multiple: { type: Boolean, default: true },
        accept: { type: String, default: '*' },
        maxSize: { type: Number, default: 20 * 1024 * 1024 } // 20MB
    },

    emits: ['update:files'],

    data() {
        return {
            files: [],
            isDragging: false,
            langData: {
                ko: {
                    dropZoneDesc: "'파일추가' 버튼을 클릭하거나 파일을 마우스로 끌어서 등록 해 주세요.",
                    dropZoneBtnLabel: "파일추가",
                    dropZoneBtnLabel2: "파일찾기",
                    emptyMsg: "선택된 파일이 없습니다.",
                    overSizeMsg: "* 파일 총 용량이 20MB를 초과합니다. 파일을 삭제 후 다시 업로드해 주세요."
                }
            },
        };
    },
    computed: {
        t() { return this.langData[this.lang] || this.langData.ko; },
        fileName() {
            return this.files.length
                ? this.files.map(f => f.name).join(', ')
                : '선택된 파일 없음';
        },
        totalSize() {
            return this.files.reduce((sum, f) => sum + f.size, 0);
        },
    },
    methods: {
        triggerInput() {
            this.$refs.inputRef?.click();
        },

        addFiles(newFiles) {
            const arr = Array.from(newFiles);
            const merged = this.multiple ? [...this.files, ...arr] : arr;
            const totalSize = merged.reduce((sum, f) => sum + f.size, 0);

            this.files = merged;
            this.showSizeError = totalSize > this.maxSize;
            this.$emit('update:files', this.files);
        },

        onFileChange(e) {
            this.addFiles(e.target.files);
        },

        onDragOver() { this.isDragging = true; },
        onDragLeave() { this.isDragging = false; },
        onDrop(e) {
            this.isDragging = false;
            this.addFiles(e.dataTransfer.files);
        },

        removeFile(i) {
            this.files = this.files.filter((_, idx) => idx !== i);
            const totalSize = this.files.reduce((sum, f) => sum + f.size, 0);
            this.showSizeError = totalSize > this.maxSize;
            this.$emit('update:files', this.files);
        },

        formatSize(bytes) {
            if (bytes < 1024) return bytes + ' B';
            if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
            return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
        }
    }
};
</script>

<style scoped>
.hidden_input { display: none; }
.file_upload { min-width: 600px; }

.drop_zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 53px 20px;
    border: 1px solid #E5E5E9;
    border-radius: 16px;
    background: #F8F8F8;
    cursor: pointer;
}
.drop_zone.is_dragging { border-color: #666; background: #f0f0f0; }
.drop_zone_icon svg { width: 40px; height: 40px; color: #aaa; }
.drop_zone_text { font-size: 18px; color: #4C4C53; text-align: center; }
.btn_icon_more { margin-top: 16px; background: #D7D7DF; }
.btn_icon_more:after {
    width: 16px; height: 16px;
    background: url('@/assets/images/common/icon_set_16.png') no-repeat -336px -13px;
}

.file_input_row {
    display: none;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px 10px 16px;
    border: 1.5px solid #ccc;
    border-radius: 8px;
    background: #fff;
    cursor: pointer;
}
.file_input_row_name {
    font-size: 14px; color: #aaa; flex: 1;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.btn_small {
    flex-shrink: 0; height: 28px; border-radius: 6px;
    font-size: 14px; color: #161616; cursor: pointer;
}

/* 파일 없음 안내 */
.file_empty_msg {
    margin-top: 12px;
    font-size: 14px;
    color: #9999a6;
    text-align: center;
    padding: 16px 0;
}

/* 용량 초과 알림 */
.file_error_msg {
    margin-top: 8px;
    font-size: 13px;
    color: #fb6432;
}

/* 파일 목록 */
.file_list {
    margin-top: 12px; list-style: none; padding: 0;
    display: flex; flex-direction: column; gap: 6px;
}
.file_list_item {
    display: flex; align-items: center; gap: 8px;
    padding: 8px 12px; border: 1px solid #e5e5e5;
    border-radius: 6px; background: #fff; font-size: 13px;
}
.file_list_name {
    flex: 1; overflow: hidden; text-overflow: ellipsis;
    white-space: nowrap; color: #333;
}
.file_list_size { color: #999; white-space: nowrap; }
.file_list_size.over { color: #fb6432; font-weight: 700; }
.file_list_remove {
    border: none; background: none; color: #aaa;
    cursor: pointer; font-size: 12px; padding: 2px 4px; line-height: 1;
}
.file_list_remove:hover { color: #333; }

@media (max-width: 768px) {
    .drop_zone { display: none; }
    .file_input_row { display: flex; }
    .file_upload { min-width: 100%; }
}
</style>