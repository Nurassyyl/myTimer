const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);

    const statusBlock = document.createElement('div');
    const loadText = "sk-rotating-plane";
    const succesText = "Данные успешно отправлены с вами свяжется наш менеджер...";
    const errorText = "Ошибка...";

    const validate = (list) => {
        let succes = true;

        const p = form.querySelectorAll('.input-error');
        p.forEach(errors => {
            errors.remove();
            errors.classList.remove('error');
        })


        list.forEach(li => {
            if(!li.value) {
                if (li.classList.contains('form-name')) {
                    let inputError = document.createElement('p');
                    inputError.classList.add('input-error')
                    inputError.innerHTML = "*Поле имя обязательно для заполнения";
                    console.log(li);
                    li.parentElement.insertBefore(inputError, li);
                    li.classList.add('error');
                    succes = false;    
                } else if (li.classList.contains('form-email')) {
                    let inputError = document.createElement('p');
                    inputError.classList.add('input-error')
                    inputError.innerHTML = "*Поле E-Mail адрес обязательно для заполнения";
                    console.log(li);
                    li.parentElement.insertBefore(inputError, li);
                    li.classList.add('error');
                    succes = false;
                } else {
                    let inputError = document.createElement('p');
                    inputError.classList.add('input-error')
                    inputError.innerHTML = "*Поле телефон обязательно для заполнения";
                    console.log(li);
                    li.parentElement.insertBefore(inputError, li);
                    li.classList.add('error');
                    succes = false;
                }
            } else {
                li.classList.remove('error');
            }
        })
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

        statusBlock.classList.add(loadText);
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
                    statusBlock.classList.remove(loadText);
                    statusBlock.textContent = succesText;

                    formElements.forEach(input => {
                        input.value = '';
                    })
                })
                .catch (error => {
                    statusBlock.classList.remove(loadText);
                    statusBlock.textContent = errorText;
                })
        } else {
            statusBlock.classList.remove(loadText);
        }
        statusBlock.textContent = '';
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