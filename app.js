function callApi() {
    const url = "https://api.kedufront.juniortaker.com/item/"

    axios.get(url)
    .then(response => {
        const data = response.data
        console.log(data)
        const desc_container = document.getElementById('desc_container');
        const desc = data[0].description
        desc_container.textContent = desc
    })
    .catch(error => {
        console.error('Erreur lors de la requête GET', error);
    });
}

callApi()