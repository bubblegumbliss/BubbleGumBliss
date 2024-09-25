// Event-Listener für das Scrollen der gesamten Seite
document.addEventListener('scroll', function() {
    const container = document.querySelector('.A_pattern_container');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Vertikales Scrollen
    const containerTop = container.offsetTop;
    const containerHeight = container.scrollHeight;
    
    // Berechnen, ob sich die Seite innerhalb des Pattern-Containers befindet
    if (scrollTop >= containerTop && scrollTop < containerTop + containerHeight) {
        const scrollDistance = scrollTop - containerTop;
        const maxScrollDistance = containerHeight - window.innerHeight;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        // Proportionaler Scroll-Offset basierend auf dem vertikalen Scrollen
        const scrollLeft = (scrollDistance / maxScrollDistance) * maxScrollLeft;
        container.scrollLeft = scrollLeft;
    }
});

document.querySelector('.A_pattern_container').addEventListener('scroll', function() {
    const container = this;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.scrollWidth - container.clientWidth;

    // Prozentuale Scroll-Position berechnen
    const scrollPercentage = (scrollLeft / containerWidth) * 100;

    // Erster Text bei 2% scrollen anzeigen
    const text1 = document.querySelector('.text-1');
    if (scrollPercentage >= 1) {
        text1.style.opacity = '1';
    } else {
        text1.style.opacity = '0';
    }

    // Zweiter Text bei 5% scrollen anzeigen
    const text2 = document.querySelector('.text-2');
    if (scrollPercentage >= 8) {
        text2.style.opacity = '1';
    } else {
        text2.style.opacity = '0';
    }

    // Dritter Text bei 25% scrollen anzeigen
    const text3 = document.querySelector('.text-3');
    if (scrollPercentage >= 30) {
        text3.style.opacity = '1';
    } else {
        text3.style.opacity = '0';
    }

    // Vierter Text bei 40% scrollen anzeigen
    const text4 = document.querySelector('.text-4');
    if (scrollPercentage >= 45) {
        text4.style.opacity = '1';
    } else {
        text4.style.opacity = '0';
    }

    // Fünfter Text bei 55% scrollen anzeigen
    const text5 = document.querySelector('.text-5');
    if (scrollPercentage >= 60) {
        text5.style.opacity = '1';
    } else {
        text5.style.opacity = '0';
    }

    // Sechster Text bei 70% scrollen anzeigen
    const text6 = document.querySelector('.text-6');
    if (scrollPercentage >= 95) {
        text6.style.opacity = '1';
    } else {
        text6.style.opacity = '0';
    }
});
