const slider = () => {
    const slideContent = document.querySelector(".portfolio-content");
    const slider = document.querySelectorAll(".portfolio-item");
    const dots = document.querySelectorAll(".dot");
    const portfolioDots = document.querySelector(".portfolio-dots")

    const timeInterval = 2000;
    let currentSlide = 0;
    let interval;

    const createDot = () => {
        for(let i = 0; i < slider.length; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            console.log(dot);
            portfolioDots.append(dot);
        }
    }

    createDot();

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }
    
    const autoSlide = () => {
        prevSlide(slider, currentSlide, "portfolio-item-active");
        prevSlide(dots, currentSlide, "dot-active");
        currentSlide++;
        if (currentSlide >= slider.length) {
            currentSlide = 0;
        }
        nextSlide(slider, currentSlide, "portfolio-item-active");
        nextSlide(dots, currentSlide, "dot-active");
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer)
    }

    const stopSlide = () => {
        clearInterval(interval);
    }

    slideContent.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches(".dot, .portfolio-btn")) {
            return
        }

        prevSlide(slider, currentSlide, "portfolio-item-active");
        prevSlide(dots, currentSlide, "dot-active");

        if (e.target.matches("#arrow-right")) {
            currentSlide++;
        } else if (e.target.matches("#arrow-left")) {
            currentSlide--;
        } else if (e.target.classList.contains("dot")) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        }

        if (currentSlide >= slider.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slider.length - 1;
        }

        nextSlide(slider, currentSlide, "portfolio-item-active");
        nextSlide(dots, currentSlide, "dot-active");

    })

    slideContent.addEventListener('mouseenter', (e) => {
        if (e.target.matches(".dot, .portfolio-btn")) {
            stopSlide();
        } 
    }, true)

    slideContent.addEventListener('mouseleave', (e) => {
        if (e.target.matches(".dot, .portfolio-btn")) {
            startSlide(timeInterval);
        } 
    }, true)

    startSlide(timeInterval)

}

export default slider