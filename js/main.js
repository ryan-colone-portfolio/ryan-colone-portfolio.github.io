/* === js/main.js === */
window.addEventListener('scroll', () => {
    const title = document.querySelector('.hero-title');
    const heroImage = document.querySelector('.hero-image');
  
    const imageTop = heroImage.getBoundingClientRect().top;
  
    // Fade from 0.9 (full) to 0.45 (half) as image approaches
    if (imageTop < 200) {
      const opacity = Math.max(0.7, 0.45 + (imageTop / 200) * 0.45);
      title.style.opacity = opacity;
    } else {
      title.style.opacity = 0.9;
    }
  });
  