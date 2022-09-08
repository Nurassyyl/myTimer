const menu = () => {
    const openBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const menuItems = menu.querySelectorAll("ul>li>a");

    const handlerMenu = () => {
        if (!menu.style.transform) {
            menu.style.transform = `translateX(0%)`;
          } else {
            menu.style.transform = ``
          }
    }

    openBtn.addEventListener('click', handlerMenu);
    
    menu.addEventListener('click', (e) => {
      menuItems.forEach((menu) => {
        if (e.target.classList.contains('close-btn') || e.target === menu) {
          handlerMenu();
        }
      })
    })
    
}

export default menu;