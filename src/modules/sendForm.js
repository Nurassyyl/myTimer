const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);

    const statusBlock = document.createElement('div');
    const loadText = "Загрузка...";
    const succesText = "Данные успешно отправлены с вами свяжется наш менеджер...";
    const errorText = "Ошибка...";

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

        try {
            sendData(formBody).then(data => {
                console.log(data);
                statusBlock.classList.remove('sk-rotating-plane');
                statusBlock.textContent = succesText;
                form.append(statusBlock);
                formElements.forEach(input => {
                    input.value = '';
                })
            })
        } catch (errorText) {
                statusBlock.textContent = succesText;
                form.append(statusBlock);
        }
         
    })

}

export default sendForm;