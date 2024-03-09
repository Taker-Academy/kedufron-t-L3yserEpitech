function callApi() {
    const url = "https://api.kedufront.juniortaker.com/item/"

    axios.get(url)
    .then(response => {
        const data = response.data
        console.log(data)
        console.log(data)

        const imageContainerProd_id_1 = document.getElementById('p_prod_1');
        const imageUrl_prod_id_1 = 'https://api.kedufront.juniortaker.com/item/picture/1';
        imageElementProd_id_1 = document.createElement('img');
        imageElementProd_id_1.src = imageUrl_prod_id_1;
        imageElementProd_id_1.style.width = '650px'
        imageContainerProd_id_1.appendChild(imageElementProd_id_1);

        const containerr = document.getElementById('prod_name_1')
        containerr.textContent = data[0].name

        const price = document.getElementById('price_1')
        price.textContent = 'EU ' + data[0].price + '€'

        const desc = document.getElementById('desc_prod_1')
        desc.textContent = data[0].description + ' Fabriqué le ' + data[0].createdIn
    })
    .catch(error => {
        console.error('Erreur lors de la requête GET', error);
    });
}

callApi()