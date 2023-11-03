document.addEventListener('DOMContentLoaded', () => {
  // FUNCTIONALITY FOR NAVBAR SCROLL STYLES
  const headerTag = document.querySelector('.header');
  const navLinks = document.querySelectorAll('nav ul a');
  let isClicked = false;

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
        topLineCloseButton.classList.remove('animationOpenTop')
        bottomLineCloseButton.classList.remove('animationOpenBottom')
        menuMobile.classList.add('visuallyhidden')
        menuMobileContainer.classList.remove('active')
        isClicked = !isClicked;
      });
    })
  }

  // BUTTON CLOSE MOBILE MENU

  const navbarWidth = document.querySelector('nav').offsetWidth;
  const menuDesktop = document.querySelector('.navigation__primary-btnGroup');
  const menuMobile = document.querySelector('.navigation__primary-mobile');
  const menuMobileButton = document.querySelector('.navigation__primary-mobile-close');


  if (navbarWidth < 768) {
    menuDesktop.classList.add('visuallyhidden');
    menuMobileButton.classList.remove('visuallyhidden');
    menuMobile.classList.remove('visuallyhidden');
  } else {
    menuDesktop.classList.remove('visuallyhidden');
    menuMobileButton.classList.add('visuallyhidden');
    menuMobile.classList.add('visuallyhidden');
  }

  window.addEventListener('resize', () => {
    if (navbarWidth < 768) {
      menuDesktop.classList.add('visuallyhidden');
      menuMobileButton.classList.remove('visuallyhidden');
      menuMobile.classList.remove('visuallyhidden');
    } else {
      menuDesktop.classList.remove('visuallyhidden');
      menuMobileButton.classList.add('visuallyhidden');
      menuMobile.classList.add('visuallyhidden');
    }
  })


  const menuMobileContainer = document.querySelector('.navigation__primary-mobile-container');
  const closeMenuButton = document.getElementById('closeMobileButton-js');
  const topLineCloseButton = document.querySelector('.close-topLine');
  const bottomLineCloseButton = document.querySelector('.close-bottomLine');



  closeMenuButton.addEventListener('click', () => {
    
    if (isClicked) {
        topLineCloseButton.classList.remove('animationOpenTop')
        bottomLineCloseButton.classList.remove('animationOpenBottom')
        menuMobileContainer.classList.remove('active')
        menuMobile.classList.remove('activeBckgd')
    } else {
      topLineCloseButton.classList.add('animationOpenTop')
      bottomLineCloseButton.classList.add('animationOpenBottom')
      menuMobileContainer.classList.add('active')
      menuMobile.classList.add('activeBckgd')
    }

    isClicked = !isClicked;
  })
});
