(function () {
    "use strict";

    var STORAGE_KEY = "portfolio-theme";
    var body = document.body;
    var toggleButton = document.querySelector("[data-theme-toggle]");

    if (!body || !toggleButton) {
        return;
    }

    var applyTheme = function (theme) {
        var isDark = theme === "dark";

        body.classList.toggle("theme-dark", isDark);
        toggleButton.setAttribute("aria-pressed", String(isDark));
    };

    localStorage.removeItem(STORAGE_KEY);
    applyTheme("light");

    toggleButton.addEventListener("click", function () {
        var nextTheme = body.classList.contains("theme-dark") ? "light" : "dark";
        applyTheme(nextTheme);
    });
})();
