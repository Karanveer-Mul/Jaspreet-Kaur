function scrollToDiv(target) {
    document.getElementById(target).scrollIntoView({
        behavior: 'smooth',
    });
};

document.getElementById("portfolio-button").addEventListener('click', function() {scrollToDiv("portfolio")});
document.getElementById("portfolio-nav").addEventListener('click', function() {scrollToDiv("portfolio")});
document.getElementById("skills-nav").addEventListener('click', function() {scrollToDiv("skills")});
document.getElementById("about-nav").addEventListener('click', function() {scrollToDiv("about")});
document.getElementById("contact-nav").addEventListener('click', function() {scrollToDiv("contact")});