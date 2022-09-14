const f = () => {
    const getData = (url, ) => {
        return fetch(url)
        .then(response => response.json())
    }

    const sendData = ({url, method = "GET"}) => {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
    }
    
    let user = {};

    getData('db.json')
        .then(data => {
            user = data
            console.log(user);
            sendData({
                url: "https://jsonplaceholder.typicode.com/posts",
                method: "POST"
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
        })
        .catch(error => {
            console.log(error);
        })

}

export default f