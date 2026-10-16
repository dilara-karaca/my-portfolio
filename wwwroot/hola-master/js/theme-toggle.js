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

    var savedTheme = "dark";

    try {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored === "light" || stored === "dark") {
            savedTheme = stored;
        }
    } catch (error) {
        savedTheme = "dark";
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
