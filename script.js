// Theme toggling
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
});

// Typing effect
const typingText = document.querySelector('.typing-effect');
const text = typingText.textContent;
typingText.textContent = '';

let charIndex = 0;
function typeText() {
    if (charIndex < text.length) {
        typingText.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animate progress bars
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.setProperty('--progress', progress + '%');
    });
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('skills-section')) {
                animateProgressBars();
            }
        }
    });
}, { threshold: 0.1 });

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Add loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
        // Simulate form submission (replace with actual API endpoint)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        alert('Message sent successfully!');
        contactForm.reset();
    } catch (error) {
        alert('Failed to send message. Please try again.');
    } finally {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
});

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

// Resume actions
const printButton = document.getElementById('print-resume');
const downloadButton = document.getElementById('download-resume');

printButton.addEventListener('click', () => {
    window.print();
});

downloadButton.addEventListener('click', async (e) => {
    e.preventDefault();
    
    // Create a clone of the resume section
    const resumeSection = document.querySelector('.resume-content').cloneNode(true);
    
    // Remove the action buttons from the clone
    const actions = resumeSection.querySelector('.resume-actions');
    if (actions) {
        actions.remove();
    }
    
    // Create a new document with proper styling
    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Mark Soma - Resume</title>
            <style>
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    line-height: 1.6;
                    color: #1f2937;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 2rem;
                }
                /* Add other necessary styles... */
            </style>
        </head>
        <body>
            ${resumeSection.outerHTML}
        </body>
        </html>
    `;
    
    // Create a Blob from the HTML
    const blob = new Blob([html], { type: 'text/html' });
    
    // Create a download link and trigger it
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mark-soma-resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    typeText();
    loadProjects();
});