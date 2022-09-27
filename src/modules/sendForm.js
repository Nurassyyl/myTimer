const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);

    const statusBlock = document.createElement('div');
    const loadText = "Загрузка...";
    const succesText = "Данные успешно отправлены с вами свяжется наш менеджер...";
    const errorText = "Ошибка...";

    const validate = (list) => {
        let succes = true;
        return succes;
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

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.classList.add('sk-rotating-plane');
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
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
            sendData(formBody)
                .then(data => {
                    statusBlock.classList.remove('sk-rotating-plane');
                    statusBlock.textContent = succesText;

                    formElements.forEach(input => {
                        input.value = '';
                    })
                })
                .catch (error => {
                    statusBlock.classList.remove('sk-rotating-plane');
                    statusBlock.textContent = errorText;
                })
        } else {
            alert("Данные не валидны");
        }
    }

    try {
        if(!form) {
            throw new Error('Верните форму на место, пожаааалуйста!')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();
        })
    } catch (error) {
        console.log(error.message);
    }

}

export default sendForm;