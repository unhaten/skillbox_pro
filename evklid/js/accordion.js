setInterval(function () {
    document.querySelectorAll(".details__question").forEach(function (e) {
        e.setAttribute("tabindex", "0");
    });
}, 100);
