// SKYBOX //
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background').appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
textureLoader.load('./assets/images/skybox_Himmel.jpg', function(texture) {
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.repeat.set(-1, 1.5); // Pass this value according to your need

    const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.001;
        renderer.render(scene, camera);
    }
    animate();
});

camera.position.set(0, 0, 0.1);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// SCROLL // 
document.addEventListener('DOMContentLoaded', function() {
  const scrollContainer = document.querySelector('.scroll-container');
  scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

  let scrollTop = 0;

  function handleWheel(event) {
    event.preventDefault();
    scrollTop -= event.deltaY; // Invertiere die Scroll-Richtung
    handleScroll();
  }

  function handleScroll() {
    const sections = document.querySelectorAll('.scroll-section');
    const speed = parseFloat(scrollContainer.dataset.speed) || 0.05;

    sections.forEach((section, index) => {
      const depth = (sections.length - index - 1) * -6;
      section.style.zIndex = sections.length - index;
      section.style.transform = `translateZ(${-depth + scrollTop * speed}px)`;
    });
  }
});
