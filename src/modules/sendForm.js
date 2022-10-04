const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);
    const main = document.querySelector('main');
    const mainForm = document.querySelector('.main-form-input');
    const row = form.querySelector('.row');
    const container = form.querySelectorAll('.container')[1];

    const statusBlock = document.createElement('div');
    const loadText = "sk-rotating-plane";
    const succesText = "Данные успешно отправлены с вами свяжется наш менеджер...";
    const errorText = "Ошибка...";

    const validate = (list) => {
        let succes = true;
        const formName = list[0];
        if (!/[а-яА-Я]+/gi.test(formName.value)) {
            let mainError = '<div class="row">' +
                                '<div class="col-12 col-lg-4">' +
                                    '<input type="text" class="form-name" id="form1-name" name="user_name" placeholder="Ваше имя"' +
                                        'required>' +
                                '</div>' +
                                '<div class="col-12 col-lg-4">' +
                                    '<input type="email" class="form-email" id="form1-email" name="user_email" placeholder="E-mail">' +
                                    '<p class="input-error">*Поле E-Mail адрес обязательно для заполнения.</p>' +
                                '</div>' +
                                '<div class="col-12 col-lg-4">' +
                                    '<input type="tel" class="form-phone" id="form1-phone" name="user_phone"' +
                                        'placeholder="Номер телефона" required>' +
                                '</div>' +
                            '</div>';
            let containerError = '<div class="container">' +
                                    '<div class="row justify-content-center">' +
                                        '<button class="btn form-btn" type="submit">Оставить заявку!</button>' +
                                    '</div>' +
                                '</div>'            
            mainForm.innerHTML = mainError;
            mainForm.classList.add('error');
            container.innerHTML = containerError;
            container.classList.add('error');
            form.append(mainForm);
            form.append(container)
            succes = false;
        } else {
            succes = true;
        }
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