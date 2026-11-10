// Hovering a project row shows its image next to the cursor.
(function () {
    const box = document.getElementById("project-preview");
    if (!box || !window.matchMedia("(hover: hover)").matches) return;
    document.querySelectorAll(".grid-item").forEach(item => {
        const img = item.querySelector(".rectangle");
        if (!img) return;
        item.addEventListener("mouseenter", () => {
            box.style.backgroundImage = img.style.backgroundImage;
            box.classList.add("show");
        });
        item.addEventListener("mousemove", e => {
            box.style.transform = "translate(" + (e.clientX + 24) + "px," + (e.clientY - 80) + "px)";
        });
        item.addEventListener("mouseleave", () => box.classList.remove("show"));
    });
})();
