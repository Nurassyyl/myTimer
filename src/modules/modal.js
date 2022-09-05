const modal = () => {
    const modal = document.querySelector(".popup");
    const buttons = document.querySelectorAll(".popup-btn");
    const closeBtn = modal.querySelector(".popup-close");
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.transform = "translateX(0%)";
            modal.style.transition = "transform .7s ease";
        })
    })
    closeBtn.addEventListener('click', () => {
        modal.style.transform = "";
        modal.style.transition = "transform .7s ease";
    })
}

export default modal;