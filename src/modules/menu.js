const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const scrollLink = document.querySelector('a[href="#service-block"]');

  const scroll = (element, event) => {
    event.preventDefault();
    const targetElementName = element["hash"];
    const targetElement = document.querySelector(`${targetElementName}`);
    targetElement.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);

  closeBtn.addEventListener("click", handleMenu);

  scrollLink.addEventListener("click", (event) => scroll(scrollLink, event));

  menuItems.forEach((element) => {
    element.addEventListener("click", (event) => {
      handleMenu();
      scroll(element, event);
    });
  });
};

export default menu;
