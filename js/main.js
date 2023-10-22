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
    const navLinks = document.querySelectorAll("nav ul a");

    navLinks.forEach( item => {
      console.log(item);
      item.addEventListener("click", (e) => {
        e.preventDefault();
        if (item.classList.contains('active')) {
          item.classList.toggle('active');
        }

        const elementClicked = e.currentTarget;
        const targetId = elementClicked.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            behavior: "smooth",
            block: "end",
            top: targetElement.offsetTop - 140,
          });
        }
      });
    })
  }
});
