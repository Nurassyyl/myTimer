const accordion = () => {
    const tabPanel = document.querySelector('.service-header');
    const tabs = document.querySelectorAll('.service-header-tab');
    const tabContent = document.querySelectorAll('.service-tab');
    tabPanel.addEventListener('click', (e) => {
        tabs.forEach((el, index) => {
            if (e.target.closest('.service-header-tab')) {
                let tabBtn = e.target.closest('.service-header-tab')
                if (el !== tabBtn) {
                    el.classList.remove('active');
                    tabContent[index].classList.add('d-none');
                } else {
                    el.classList.add('active');
                    tabContent[index].classList.remove('d-none');
                }
            }
        })
    })
}

export default accordion;

