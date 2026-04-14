<template>
    <!-- Figma node 198:26591 — popup 940×874, content 844 wide -->
    <div class="modal_cont store_find_modal">
        <div class="sf_title_row">
            <h2 class="sf_title">GS25 매장찾기</h2>
            <button type="button" class="sf_close" aria-label="닫기" @click="closeModal"></button>
        </div>

        <div class="modal_content sf_body">
            <div class="sf_row sf_row_dd">
                <select
                    v-model="selSido"
                    class="sf_select"
                    :class="{ sf_is_placeholder: !selSido }"
                    aria-label="시·도"
                >
                    <option value="" disabled>시·도</option>
                    <option v-for="o in optionsSido" :key="o" :value="o">{{ o }}</option>
                </select>
                <select
                    v-model="selSigungu"
                    class="sf_select"
                    :class="{ sf_is_placeholder: !selSigungu }"
                    aria-label="시·군·구"
                >
                    <option value="" disabled>시/군/구</option>
                    <option v-for="o in optionsSigungu" :key="o" :value="o">{{ o }}</option>
                </select>
                <select
                    v-model="selDong"
                    class="sf_select"
                    :class="{ sf_is_placeholder: !selDong }"
                    aria-label="동"
                >
                    <option value="" disabled>동 선택</option>
                    <option v-for="o in optionsDong" :key="o" :value="o">{{ o }}</option>
                </select>
            </div>

            <div class="sf_row sf_row_input">
                <div class="sf_input_wrap">
                    <input
                        v-model="keyword"
                        type="search"
                        class="sf_input"
                        placeholder="찾으시려는 매장명을 입력하세요"
                        autocomplete="off"
                    />
                    <span class="sf_input_trailing" aria-hidden="true"></span>
                </div>
            </div>

            <div class="sf_filter">
                <button
                    type="button"
                    class="sf_filter_btn"
                    :aria-expanded="filterExpanded"
                    @click="filterExpanded = !filterExpanded"
                >
                    <span class="sf_filter_label">필터</span>
                    <span class="sf_chevron" :class="{ is_collapsed: !filterExpanded }"></span>
                </button>
                <div v-show="filterExpanded" class="sf_chip_wrap">
                    <button
                        v-for="c in chips"
                        :key="c.id"
                        type="button"
                        class="sf_chip"
                        :class="{ is_selected: c.selected, has_icon: !!c.icon }"
                        :style="c.icon ? { '--chip-icon': `url(${c.icon})` } : {}"
                        @click="c.selected = !c.selected"
                    >
                        {{ c.label }}
                    </button>
                </div>
            </div>

            <div class="sf_map_canvas">
                <iframe
                    class="sf_map_iframe"
                    src=""
                    title="매장 위치 지도"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
import modal from "@/assets/js/modal";
import icoChip01 from "@/assets/images/dummy/mo/ico_chip_01.png";
import icoChip02 from "@/assets/images/dummy/mo/ico_chip_02.png";
import icoChip03 from "@/assets/images/dummy/mo/ico_chip_03.png";
import icoChip04 from "@/assets/images/dummy/mo/ico_chip_04.png";
import icoChip05 from "@/assets/images/dummy/mo/ico_chip_05.png";

/** Figma 198:26612~26633 chip 텍스트·선택 상태 */
const CHIP_DEF = [
    { id: "c1",  label: "스포츠 토토",             selected: true  },
    { id: "c2",  label: "CAFE25",                  selected: false },
    { id: "c3",  label: "치킨25",                  selected: true  },
    { id: "c4",  label: "의약품",                  selected: false },
    { id: "c5",  label: "self25",                  selected: false },
    { id: "c6",  label: "택배",                    selected: false, icon: icoChip01 },
    { id: "c7",  label: "ATM 현금 입/출금",        selected: false },
    { id: "c8",  label: "현금출금(CD기)",          selected: false },
    { id: "c9",  label: "TAX REFUND",              selected: false },
    { id: "c10", label: "SMART ATM",               selected: false },
    { id: "c11", label: "셀프 조리기",             selected: false },
    { id: "c12", label: "배달서비스",              selected: true  },
    { id: "c13", label: "택배 픽업",               selected: false },
    { id: "c14", label: "군고구마",                selected: true  },
    { id: "c15", label: "심장재세동기",            selected: false },
    { id: "c16", label: "붕어빵",                  selected: false, icon: icoChip02 },
    { id: "c17", label: "GOPIZZA",                 selected: false, icon: icoChip03 },
    { id: "c18", label: "양주/와인",               selected: false },
    { id: "c19", label: "신선강화",                selected: false },
    { id: "c20", label: "무신사 스탠다드 EXPRESS", selected: false, icon: icoChip04 },
    { id: "c21", label: "대한항공 POSA",           selected: false, icon: icoChip05 },
];

export default {
    name: "StoreFindModal",

    data() {
        return {
            keyword: "",
            filterExpanded: true,
            selSido: "",
            selSigungu: "",
            selDong: "",
            optionsSido: ["서울시", "경기도", "인천광역시"],
            optionsSigungu: ["강남구", "서초구", "송파구"],
            optionsDong: ["역삼동", "삼성동", "청담동"],
            chips: CHIP_DEF.map((c) => ({ ...c })),
        };
    },

    methods: {
        closeModal(event) {
            modal.close(event.currentTarget);
        },
    },
};
</script>

<style scoped>
/* Figma 198:26591 */

.store_find_modal.modal_cont {
    width: 844px;
    max-width: 100%;
    min-height: 0;
    box-sizing: border-box;
}

/* title FRAME h92 */
.sf_title_row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    min-height: 92px;
    margin: 0;
    padding: 0;
}

.sf_title {
    margin: 0;
    color: #161616;
    font-size: 4rem;
    font-weight: 700;
    line-height: 52px;
    letter-spacing: -0.4px;
}

.sf_close {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    margin-top: 6px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    position: relative;
}

.sf_close::before,
.sf_close::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 0;
    border-top: 2px solid #2d2d2d;
    transform-origin: center;
}

.sf_close::before {
    transform: translate(-50%, -50%) rotate(45deg);
}

.sf_close::after {
    transform: translate(-50%, -50%) rotate(-45deg);
}

.sf_body {
    padding: 0;
    margin: 0;
}

/* 3×276 + gap8×2 = 844 */
.sf_row {
    margin: 0;
    padding: 0;
}

.sf_row_dd {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
}

.sf_row_input {
    margin-bottom: 0;
}

.sf_select {
    min-width: 0;
    height: 52px;
    padding: 0 40px 0 16px;
    border: 1px solid #c4c4d0;
    border-radius: 12px;
    background-color: #fff;
    color: #161616;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.16px;
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='none' stroke='%23666' stroke-width='1.5' d='M5 7.5L10 12.5 15 7.5'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    box-sizing: border-box;
}

.sf_select.sf_is_placeholder {
    color: #a4a4b0;
}

.sf_select option {
    color: #161616;
}

.sf_input_wrap {
    position: relative;
}

.sf_input {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    padding: 0 44px 0 16px;
    border: 1px solid #c4c4d0;
    border-radius: 12px;
    background: #fff;
    color: #161616;
    font-size: 1.6rem;
    line-height: 24px;
    letter-spacing: -0.16px;
    outline: none;
}

.sf_input::placeholder {
    color: #a4a4b0;
}

.sf_input:focus {
    border-color: #107af2;
}

/* 검색 아이콘 */
.sf_input_trailing {
    position: absolute;
    right: 16px;
    top: 50%;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    background-color: red;
    pointer-events: none;
    box-sizing: border-box;
}

/* Filter y gap: input 끝 + 12px */
.sf_filter {
    margin-top: 12px;
}

.sf_filter_btn {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 40px;
    margin: 0 0 6px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
}

.sf_filter_label {
    color: #161616;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.01em;
}

.sf_chevron {
    width: 16px;
    height: 16px;
    background-color: red;
}

.sf_chevron.is_collapsed {
    transform: rotate(-135deg) translateY(2px);
}

/* Chip 영역 h124, chip h36, gap 8 */
.sf_chip_wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    min-height: 124px;
    align-content: flex-start;
}

.sf_chip {
    height: 36px;
    padding: 0 16px;
    box-sizing: border-box;
    border-radius: 99px;
    border: 1px solid #d7d7df;
    background: #f2f2f4;
    color: #666;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 19.6px;
    letter-spacing: -0.14px;
    cursor: pointer;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.sf_chip.is_selected {
    border-color: #107af2;
    background: #e7f2fe;
    color: #107af2;
}

.sf_chip.has_icon::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    margin-right: 4px;
    background: var(--chip-icon) center / contain no-repeat;
}



.sf_map_canvas {
    margin-top: 64px;
    width: 100%;
    height: 320px;
    border-radius: 10px;
    background-color: #e8e8ee;
    overflow: hidden;
    position: relative;
}

.sf_map_iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
    display: block;
}

@media (max-width: 768px) {
    .store_find_modal.modal_cont {
        width: 100%;
    }

    .sf_title {
        font-size: 2.4rem;
        line-height: 32px;
    }

    .sf_title_row {
        min-height: auto;
        margin-bottom: 20px;
    }

    .sf_close {
        margin-top: 2px;
    }

    .sf_row_dd {
        flex-direction: column;
    }

    .sf_select {
        width: 100%;
        height: 48px;
    }


    .sf_map_canvas {
        height: 240px;
    }

    .sf_chip_wrap {
        min-height: 0;
    }
}
</style>
