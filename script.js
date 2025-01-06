document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    
    function updateTitle() {
        const hash = window.location.hash;
        if (hash) {
            const section = document.querySelector(hash);
            if (section) {
                document.title = section.querySelector('h2').innerText + " - Shark Zubat's Website";
            }
        }
    }
    
    sections.forEach(section => {
        section.addEventListener('click', () => {
            document.title = section.querySelector('h2').innerText + " - Shark Zubat's Website";
        });
    });
    
    window.addEventListener('hashchange', updateTitle);
    
    // Update the title on initial load
    updateTitle();
});
