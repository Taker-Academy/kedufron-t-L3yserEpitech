function callApi() {
    const url = "https://api.kedufront.juniortaker.com/item/"

    axios.get(url)
    .then(response => {
        console.log(response.data); // Affiche les données de la réponse
    })
    .catch(error => {
        console.error('Erreur lors de la requête GET', error);
    });
}