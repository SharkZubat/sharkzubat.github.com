document.addEventListener('DOMContentLoaded', (event) => {
    function updateTitleAndContent() {
        const hash = window.location.hash;
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            // Hide all sections
            section.style.display = 'none';
        });

        if (hash) {
            const section = document.querySelector(hash);
            if (section) {
                // Show the relevant section
                section.style.display = 'block';
                // Update the document title
                document.title = section.querySelector('h2').innerText + " - Shark Zubat's Website";
            }
        }
    }

    window.addEventListener('hashchange', updateTitleAndContent);
    
    // Update the title and content on initial load
    updateTitleAndContent();
});
