const sendForm = ({formId, someElem = [], formModalId, formFooterId}) => {
    const form = document.getElementById(formId);
    const formModal = document.getElementById(formModalId);
    const formFooter = document.getElementById(formFooterId);

    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const validate = (lists) => {
        console.log(lists);
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            header: {
                "Content-type": "application/json",
            }
        }).then(res => res.json())
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
            console.log("val " + val);
            console.log("key" + key);
        })

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === "block") {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === "input") {
                formBody[elem.id] = element.value;
            }
        })  

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                formElements.forEach(input => {
                    input.value = "";
                    statusBlock.textContent = successText;
                })
            })
            .catch(error => {
                statusBlock.textContent = errorText;
            })  
        } else {
            alert("Данные не валидны");
        }

        
    })

    formModal.addEventListener('submit', (e) => {
        e.preventDefault()

        const formModalElements = formModal.querySelectorAll('input')
        const formData = new FormData(formModal);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
            console.log("val " + val);
            console.log("key" + key);
        }) 

        validate(formModalElements)

        sendData(formBody).then(data => {
            console.log(data);
        })

    })

    formFooter.addEventListener('submit', (e) => {
        e.preventDefault()

        const formFooterElements = formModal.querySelectorAll('input')
        const formData = new FormData(formFooter);
        const formBody = {};

        formData.forEach((val, key) => {
            formBody[key] = val;
            console.log("val " + val);
            console.log("key " + key);
        }) 

        validate(formFooterElements)

        sendData(formBody).then(data => {
            console.log(data);
        })

    })

}

export default sendForm;