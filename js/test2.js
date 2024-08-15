
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


// clock functionality

// Dark/Light Mode Toggle Function
function toggleMode() {
    const body = document.querySelector('body');
    const icon = document.getElementById('toggleModeIcon');

    // Toggle dark mode class on body
    body.classList.toggle('dark-mode');

    // Toggle between sun and moon icons
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill');
    } else {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');
    }
}

// Function to update the clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Call updateClock every second to update the time
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();
