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
