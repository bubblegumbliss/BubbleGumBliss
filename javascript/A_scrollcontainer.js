// SCROLL // 
document.addEventListener('DOMContentLoaded', function() {
  const scrollContainer = document.querySelector('.scroll-container_Muster');
  scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

  let scrollTop = 0;

  function handleWheel(event) {
    event.preventDefault();
    scrollTop -= event.deltaY; // Scroll-Richtung invertieren
    handleScroll();
  }

  function handleScroll() {
    const sections = document.querySelectorAll('.scroll-section_Muster');
    const speed = parseFloat(scrollContainer.dataset.speed) || 0.05;

    sections.forEach((section, index) => {
      const depth = (sections.length - index - 1) * -6; // Z-Tiefe anpassen
      section.style.zIndex = sections.length - index;
      section.style.transform = `translateZ(${-depth + scrollTop * speed}px)`;
    });
  }
});
