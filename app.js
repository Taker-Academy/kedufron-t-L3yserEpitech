function callApi() {
    const url = "https://api.kedufront.juniortaker.com/item/"

    axios.get(url)
    .then(response => {
        data = response.data
        console.log(data)
        console.log(data[0].description)

    })
    .catch(error => {
        console.error('Erreur lors de la requête GET', error);
    });

}