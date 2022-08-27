const sections = document.querySelectorAll("section");
const [...links] = document.querySelectorAll("#main_menu .list .list_item a");

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop =
      section.offsetTop; /* How Far The Section Is From The Top Of The Page */
    const sectionHeight = section.clientHeight; /* Height Of Each Section */
    // 185 Or 132 Are The Height Of The Header At Different Screen Sizes
    const addedPosition = window.innerWidth > 768 ? 185 : 130;
    if (window.pageYOffset > Math.abs(sectionTop - addedPosition)) {
      currentSection = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(currentSection)) {
      link.classList.add("active");
    }
  });
});

// Change Positions By Clicking Links
links.forEach((link) => {
  link.addEventListener("click", () => {
    sections.forEach((section) => {
      if (link.className.includes(section.getAttribute("id"))) {
        // 185 Or 132 Are The Height Of The Header At Different Screen Sizes
        const addedPosition = window.innerWidth > 768 ? 185 : 130;
        const scroolToThisPositions = Math.abs(
          addedPosition - section.offsetTop
        );
        console.log(scroolToThisPositions);
        window.scrollTo({
          top: scroolToThisPositions,
        });
      }
    });
  });
});
