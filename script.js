document.addEventListener('DOMContentLoaded', (event) => {
    function updateTitle() {
        const hash = window.location.hash;
        if (hash) {
            const section = document.querySelector(hash);
            if (section) {
                document.title = section.querySelector('h2').innerText + " - Shark Zubat's Website";
            }
        }
    }

    window.addEventListener('hashchange', updateTitle);
    
    // Update the title on initial load
    updateTitle();
});
