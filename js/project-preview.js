// Hovering a project row (or the "Hi, I'm Arundhati" heading) shows an image next to the cursor.
(function () {
    const box = document.getElementById("project-preview");
    if (!box || !window.matchMedia("(hover: hover)").matches) return;

    function attach(el, image, position, besideElement, portrait) {
        el.addEventListener("mouseenter", () => {
            box.style.backgroundImage = image();
            box.style.backgroundPosition = position;
            box.classList.toggle("portrait", !!portrait);
            box.classList.add("show");
        });
        el.addEventListener("mousemove", e => {
            const w = box.offsetWidth, h = box.offsetHeight;
            // keep the preview on screen: flip to the left of the cursor near the right edge
            let x = e.clientX + 24;
            let y = e.clientY - 80;
            if (besideElement) {
                // sit just to the right of the text, so it never covers it
                const r = el.getBoundingClientRect();
                x = r.right + 24;
                y = r.top - 40;
            }
            if (x + w > window.innerWidth - 8) x = e.clientX - 24 - w;
            y = Math.max(8, Math.min(window.innerHeight - h - 8, y));
            box.style.transform = "translate(" + x + "px," + y + "px)";
        });
        el.addEventListener("mouseleave", () => box.classList.remove("show"));
    }

    document.querySelectorAll(".grid-item").forEach(item => {
        const img = item.querySelector(".rectangle");
        if (img) attach(item, () => img.style.backgroundImage, "center");
    });

    const name = document.querySelector(".hover-photo");
    if (name) attach(name, () => 'url("profile.jpg")', "50% 30%", true, true);
})();
