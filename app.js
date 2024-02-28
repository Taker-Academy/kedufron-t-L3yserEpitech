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
        const container_name_id_1 = document.getElementById(`shop_sec_id_1`);
        const name_id_1 = data[0].name;
        container_name_id_1.textContent = name_id_1;

        const container_name_id_2 = document.getElementById(`shop_sec_id_2`);
        const name_id_2 = data[1].name;
        container_name_id_2.textContent = name_id_2;

        const container_name_id_3 = document.getElementById(`shop_sec_id_3`);
        const name_id_3 = data[2].name;
        container_name_id_3.textContent = name_id_3;

        const container_name_id_4 = document.getElementById(`shop_sec_id_4`);
        const name_id_4 = data[3].name;
        container_name_id_4.textContent = name_id_4;

        const container_name_id_5 = document.getElementById(`shop_sec_id_5`);
        const name_id_5 = data[4].name;
        container_name_id_5.textContent = name_id_5;

        const container_name_id_6 = document.getElementById(`shop_sec_id_6`);
        const name_id_6 = data[5].name;
        container_name_id_6.textContent = name_id_6;

        const imageContainer = document.getElementById('popular_img');
        const imageUrl = 'https://api.kedufront.juniortaker.com/item/picture/1';
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        imageElement.style.width = '300px'
        imageContainer.appendChild(imageElement);


        const logoElement = document.querySelector('.shop_button')
        const shopDiv = document.querySelector('.shop_div')

        // Ajout d'un écouteur d'événements pour le survol de la souris sur l'élément .logo
        logoElement.addEventListener('mouseenter', function() {
        // Au survol de .logo, changer le style de .shop_div
        shopDiv.style.display = 'flex'
        })

        // Ajout d'un écouteur d'événements pour la sortie de la souris de l'élément .logo
        logoElement.addEventListener('mouseleave', function() {
        // Quand la souris quitte .logo, masquer .shop_div
        shopDiv.style.display = 'none'
        })
}


callApi()