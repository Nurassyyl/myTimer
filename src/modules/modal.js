import { animate } from "./helpers";

const modal = () => {
    const modal = document.querySelector(".popup");
    const buttons = document.querySelectorAll(".popup-btn");
    const closeBtn = modal.querySelector(".popup-close");
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            animate({
                duration: 1000,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    modal.style.opacity = progress;
                    modal.style.zIndex = 9
                }
              });
        })
    })
    closeBtn.addEventListener('click', () => {
        modal.style.opacity = 0;
        modal.style.zIndex = "";
    })

    animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          console.log(progress);
        }
      });
}

export default modal;