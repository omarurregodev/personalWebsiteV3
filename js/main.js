document.addEventListener("DOMContentLoaded", () => {
  // FUNCTIONALITY FOR NAVBAR SCROLL STYLES
  const headerTag = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    headerTag.classList.add("scrolled");
  });
  window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition === 0) {
      headerTag.classList.remove("scrolled");
    }
  });



  // MOVE SMOOTH TO A SECTION FROM NAVBAR
  
  makeLinksSmooth();

  function makeLinksSmooth() { 
    const navLinks = document.querySelectorAll("nav li a"); 
  
    for (let i = 0; i < 3; i++) {
      // console.log(navLinks[i]);
      navLinks[i].addEventListener("click", smoothScroll);
    }
  }

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
  
    if (targetElement) { 
      // targetElement.scrollIntoView({behavior: "smooth", block: "end"});
      window.scrollTo({
        behavior: 'smooth',
        block: 'end',
        top:
        targetElement.offsetTop - 140
      })
    }
  }
 
});
