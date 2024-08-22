
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
            const titleElement = project.querySelector('.card-title');
            if (titleElement) {
                console.log("Project shown:", titleElement.textContent);
            } else {
                console.log("Project shown: No card-title element found");
            }
        } else {
            project.style.display = 'none';
            const titleElement = project.querySelector('.card-title');
            if (titleElement) {
                console.log("Project hidden:", titleElement.textContent);
            } else {
                console.log("Project hidden: No card-title element found");
            }
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


const archiveItems = document.querySelectorAll('.archive-item');

archiveItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        archiveItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add('inactive');
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        archiveItems.forEach(otherItem => {
            otherItem.classList.remove('inactive');
        });
    });
});


 // Slideshow logic
 let currentSlide = 0;
 const slides = document.querySelectorAll('.slide');

 function showSlide(index) {
     slides.forEach((slide, i) => {
         slide.classList.toggle('active-slide', i === index);
     });
 }

 function nextSlide() {
     currentSlide = (currentSlide + 1) % slides.length;
     showSlide(currentSlide);
 }

 setInterval(nextSlide, 3000); // Change slides every 3 seconds

 // Simple Venn Diagram Animation
 document.addEventListener('DOMContentLoaded', () => {
     const vennDiagram = document.getElementById("venn-diagram");
     vennDiagram.classList.add("venn-animate");
 });
