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

    var savedTheme = "light";

    try {
        savedTheme = localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : "light";
    } catch (error) {
        savedTheme = "light";
    }

    applyTheme(savedTheme);

    toggleButton.addEventListener("click", function () {
        var nextTheme = body.classList.contains("theme-dark") ? "light" : "dark";
        applyTheme(nextTheme);

        try {
            localStorage.setItem(STORAGE_KEY, nextTheme);
        } catch (error) {
            return;
        }
    });
})();
