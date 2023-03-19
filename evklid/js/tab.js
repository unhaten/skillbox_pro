document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tab__btn").forEach(function (tabBtn) {
        tabBtn.addEventListener("click", function (event) {
            const path = event.currentTarget.dataset.path;

            document
                .querySelectorAll(".tab-content")
                .forEach(function (tabContent) {
                    tabContent.classList.remove("tab-content-active");
                });
            document
                .querySelector(`[data-target="${path}"]`)
                .classList.add("tab-content-active");
        });
    });
});
