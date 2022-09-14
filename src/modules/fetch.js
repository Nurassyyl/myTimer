const f = () => {
    const getData = (url, ) => {
        return fetch(url)
        .then(response => response.json())
    }

    const sendData = (url) => {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    
    let user = {};

    getData('db.json')
        .then(data => {
            user = data
            console.log(user);
            sendData("https://jsonplaceholder.typicode.com/posts")
                .then(data => {
                    console.log(data);
                })
        })

}

export default f