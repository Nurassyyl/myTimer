const menu = () => {
    const openBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul>li>a");

    const handlerMenu = () => {
        if (!menu.style.transform) {
            menu.style.transform = `translateX(0%)`;
          } else {
            menu.style.transform = ``
          }
    }
    openBtn.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', handlerMenu)
    });
}

export default menu;