function callApi() {
    const url = "https://api.kedufront.juniortaker.com/item/"

    axios.get(url)
    .then(response => {
        const data = response.data
        console.log(data)
        item_shop_section(data)
    })
    .catch(error => {
        console.error('Erreur lors de la requête GET', error);
    });
}

function item_shop_section(data) {
        const container_main_product = document.getElementById(`name_main_product`)
        const name = data[1].name
        container_main_product.textContent = name + ' !'

        const container_desc_mp = document.getElementById('desc_mp')
        const desc = data[1].description
        container_desc_mp.textContent = desc

        const container_bt_mp = document.getElementById('bt_mp')
        const bt_mp = data[1].name
        container_bt_mp.textContent = 'Shop ' + bt_mp
        container_bt_mp.classList.add('center-content');

        const imageContainer = document.getElementById('photo_mp');
        const imageUrl = 'https://api.kedufront.juniortaker.com/item/picture/2';
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.style.width = '550px'
        imageContainer.appendChild(imageElement);
}


callApi()