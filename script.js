document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', () => {
            document.title = section.querySelector('h2').innerText + " - Shark Zubat's Website";
        });
    });
});
