const sendForm = ({formId, someElem = [], formModalId}) => {
    const form = document.getElementById(formId);
    const formModal = document.getElementById(formModalId);
    console.log(formModal);

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

        validate(formElements)

        sendData(formBody).then(data => {
            console.log(data);
        })  
    })

}

export default sendForm;