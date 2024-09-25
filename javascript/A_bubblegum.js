

// Parallax-Effekt für Kaugummischichten
document.addEventListener('mousemove', function(e) {
  const layers = document.querySelectorAll('.A_bubblegum_gum-layer');
  const containerWidth = document.querySelector('.A_bubblegum_parallax-container').offsetWidth;
  const containerHeight = document.querySelector('.A_bubblegum_parallax-container').offsetHeight;
  
  layers.forEach(layer => {
    const speed = parseFloat(layer.getAttribute('data-speed'));
    const maxTranslateX = containerWidth / 4; // Begrenzte maximale Verschiebung nach links und rechts
    const maxTranslateY = containerHeight / 1; // Begrenzte maximale Verschiebung nach oben und unten
    const x = Math.min(Math.max((window.innerWidth / 2 - e.pageX) * speed / 30, -maxTranslateX), maxTranslateX);
    const y = Math.min(Math.max((window.innerHeight / 2 - e.pageY) * speed / 60, -maxTranslateY), maxTranslateY);
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});
