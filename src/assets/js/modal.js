import $ from "jquery";

const modal = {
    open(targetId, type = "default", triggerEl = null) {
        const target = document.getElementById(targetId);
        if (!target) return;

        target.setAttribute("modal-type", type);

        // 현재 열려있는 모달 수
        const activeModals = document.querySelectorAll(".modal_wrap.active");

        if (!target.classList.contains("active")) {
            target.classList.add("active");

            const zIdx = 100 + activeModals.length;
            target.style.zIndex = zIdx;

            // dim 처리
            let dim = document.querySelector(".modal_dim");
            if (dim) {
                dim.style.zIndex = zIdx - 1;
            } else if (type.indexOf("no_dim") === -1) {
                dim = document.createElement("div");
                dim.className = "modal_dim";
                dim.style.zIndex = zIdx - 1;
                document.body.append(dim);
            }

            // 스크롤 잠금
            document.body.style.overflow = "hidden";
        }

        // ajax로 내용 불러오기
        if (triggerEl && triggerEl.dataset.cont) {
            $.ajax({
                url: "./html/" + triggerEl.dataset.cont + ".html",
                method: "get",
                success: function (data) {
                    const container = target.querySelector(".modal_container");
                    if (container) container.innerHTML = data;
                },
                error: function () {
                    alert("페이지를 불러오지 못했습니다.");
                },
            });
        }
    },

    close(targetEl) {
        const target = targetEl.closest(".modal_wrap");
        if (!target) return;

        target.classList.remove("active");
        target.removeAttribute("modal-type");
        target.removeAttribute("style");

        // dim 처리
        const activeModals = document.querySelectorAll(".modal_wrap.active");
        const dim = document.querySelector(".modal_dim");

        if (activeModals.length === 0 && dim) {
            dim.remove();
        } else if (dim) {
            const zIdx = 100 + activeModals.length;
            dim.style.zIndex = zIdx - 1;
        }

        // 스크롤 잠금 해제
        document.body.style.overflow = "";
    },
};

export default modal;