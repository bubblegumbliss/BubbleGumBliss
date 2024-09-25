document.addEventListener('DOMContentLoaded', function() {
  const customCursor = document.querySelector('.custom-cursor');

  document.addEventListener('mousemove', function(e) {
    customCursor.style.left = `${e.pageX - 10}px`;
    customCursor.style.top = `${e.pageY - 10}px`;
  });
});
