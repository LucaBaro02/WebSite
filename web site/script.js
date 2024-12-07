// 1. Scroll fluido per i collegamenti di navigazione
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 2. Effetto hover sulle parole chiave in "Languages"
const keywords = document.querySelectorAll('.key-words .keyword-item');
keywords.forEach(keyword => {
    keyword.addEventListener('mouseenter', () => {
        keyword.style.transform = 'scale(1.1)';
        keyword.style.transition = 'transform 0.3s ease';
        keyword.style.cursor = 'pointer';
    });

    keyword.addEventListener('mouseleave', () => {
        keyword.style.transform = 'scale(1)';
    });
});

// 3. Animazione quando una sezione entra in vista (scroll animato)
const sections = document.querySelectorAll('.about, .skills, #languages, #contact');

const handleScroll = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', handleScroll);
