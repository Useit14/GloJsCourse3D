const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const scrollLink = document.querySelector('a[href="#service-block"]');

  const scroll = (element) => {
    const targetElementName = element["hash"];
    const targetElement = document.querySelector(`${targetElementName}`);
    targetElement.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleMenu();
  });

  scrollLink.addEventListener("click", () => scroll(scrollLink));

  menuItems.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      handleMenu();
      scroll(element);
    });
  });
};

export default menu;
