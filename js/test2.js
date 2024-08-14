
let activeCategories = [];

// Function to toggle the active category
function toggleCategory(button, category) {
    console.log("Button clicked for category:", category);
    
    const index = activeCategories.indexOf(category);

    if (index > -1) {
        // Remove category if already active
        activeCategories.splice(index, 1);
        button.classList.remove('active');
        console.log("Category removed:", category);
    } else {
        // Add category if not active
        activeCategories.push(category);
        button.classList.add('active');
        console.log("Category added:", category);
    }

    console.log("Active categories:", activeCategories);
    filterProjects();
}

// Function to filter the projects based on the active categories
function filterProjects() {
    console.log("Filtering projects with active categories:", activeCategories);

    const projects = document.querySelectorAll('.grid-item');
    projects.forEach(project => {
        // Get the categories of the project
        const projectCategories = project.getAttribute('data-category').split(' ');

        console.log("Project categories:", projectCategories);

        // Show project if it matches all active categories
        if (activeCategories.length === 0 || activeCategories.every(cat => projectCategories.includes(cat))) {
            project.style.display = 'block';
            console.log("Project shown:", project.querySelector('.title').textContent);
        } else {
            project.style.display = 'none';
            console.log("Project hidden:", project.querySelector('.title').textContent);
        }
    });
}
