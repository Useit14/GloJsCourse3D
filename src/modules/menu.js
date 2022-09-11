const menu = () => {
  const menu = document.querySelector("menu");
  const scrollLink = document.querySelector('a[href="#service-block"]');

  const scroll = (element, event) => {
    event.preventDefault();

    const targetElementName = element["hash"];
    const targetElement = document.querySelector(`${targetElementName}`);
    targetElement.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const toggleMenu = (e) => {
    if (e.target.closest(".menu")) {
      menu.classList.toggle("active-menu");
    } else if (
      e.target.classList.contains("close-btn") ||
      !e.target.closest("menu")
    ) {
      e.preventDefault();
      menu.classList.remove("active-menu");
    } else if (e.target.matches(".active-menu ul li a")) {
      e.preventDefault();
      menu.classList.toggle("active-menu");
      scroll(e.target);
    }
  };



  document.body.addEventListener("click", (e) => {
    toggleMenu(e);

  menuBtn.addEventListener("click", handleMenu);

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleMenu();
  });

  scrollLink.addEventListener("click", (event) => scroll(scrollLink, event));

  menuItems.forEach((element) => {

    element.addEventListener("click", (event) => {
      handleMenu();
      scroll(element, event);
    });
  });
};

export default menu;
