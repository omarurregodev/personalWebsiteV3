document.addEventListener('DOMContentLoaded', () => {
  // FUNCTIONALITY FOR NAVBAR SCROLL STYLES
  const headerTag = document.querySelector('.header');
  const navLinks = document.querySelectorAll('nav ul a');

  window.addEventListener('scroll', () => {
    headerTag.classList.add('scrolled');
  });
  window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition === 0) {
      headerTag.classList.remove('scrolled');
    }
  });

  // MOVE SMOOTH TO A SECTION FROM NAVBAR

  makeLinksSmooth();

  function makeLinksSmooth() {
    let elementClicked;
    navLinks.forEach( item => {    
      item.addEventListener('click', (e) => {
        e.preventDefault();
        if (elementClicked) {
          elementClicked.classList.remove('active');
        }
        elementClicked = e.currentTarget;
        const targetId = elementClicked.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        elementClicked.classList.add('active');
        if (targetElement) {
          window.scrollTo({
            behavior: 'smooth',
            block: 'end',
            top: targetElement.offsetTop - 140,
          });
        }
      });
    })
  }
});
