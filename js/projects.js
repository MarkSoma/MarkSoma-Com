// Dynamic project loading
const projectsGrid = document.querySelector('.projects-grid');
const projects = [
    {
        title: 'Project 1',
        description: 'A description of project 1 and its features.',
        image: 'https://via.placeholder.com/300',
        github: '#',
        live: '#'
    },
    {
        title: 'Project 2',
        description: 'A description of project 2 and its features.',
        image: 'https://via.placeholder.com/300',
        github: '#',
        live: '#'
    }
];

function loadProjects() {
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.github}" class="project-link"><i class="fab fa-github"></i> Code</a>
                    <a href="${project.live}" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Initialize projects
document.addEventListener('DOMContentLoaded', loadProjects);
