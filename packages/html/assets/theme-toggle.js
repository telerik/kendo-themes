(function() {
    "use strict";

    let isDark = false;

    const btn = document.createElement("button");
    btn.textContent = "Light";
    btn.className = "k-button";

    const s = btn.style;
    s.position = "fixed";
    s.top = "8px";
    s.right = "8px";
    s.zIndex = "100000";

    btn.addEventListener("click", function() {
        isDark = !isDark;

        if (isDark) {
            document.documentElement.setAttribute("data-theme", "dark");
            btn.textContent = "Dark";
        } else {
            document.documentElement.removeAttribute("data-theme");
            btn.textContent = "Light";
        }
    });

    document.body.appendChild(btn);
})();
