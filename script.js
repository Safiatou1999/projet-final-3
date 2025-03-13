// Scroll Reveal
const scrollReveal = () => {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight * 0.8;
      if(elementTop < windowHeight) {
        el.classList.add('active');
      }
    });
  }
  
  // Effet "eau" sur clic
  const createWaterEffect = (e) => {
    const btn = e.currentTarget;
    const effect = document.createElement('div');
    effect.className = 'water-effect';
    const rect = btn.getBoundingClientRect();
    effect.style.left = $`{e.clientX - rect.left - 10}px`;
    effect.style.top = $`{e.clientY - rect.top - 10}px`;
    btn.appendChild(effect);
    setTimeout(() => effect.remove(), 600);
  }
  
  // Initialisation
  document.addEventListener('DOMContentLoaded', () => {
    // Boutons avec effet eau
    document.querySelectorAll('.btn-water').forEach(btn => {
      btn.addEventListener('click', createWaterEffect);
    });
  
    // Scroll Reveal
    window.addEventListener('scroll', scrollReveal);
    scrollReveal(); // Initial check
  
    // Retour en haut
    document.querySelector('.scroll-top').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth'});
});
  });  