function toggleCategory(button, category) {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        if (item.dataset.category.includes(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}
