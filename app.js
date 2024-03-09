function callApi() {
    const url = "https://api.kedufront.juniortaker.com/item/"

    axios.get(url)
    .then(response => {
        const data = response.data
        itemMainPage(data)
        popularItemMainPage(data)
    })
    .catch(error => {
        console.error('Erreur lors de la requête GET', error);
    })
}

function itemMainPage(data) {
    for (let i = 0; i < data.length; i++) {
        const nameContainer = document.getElementById(`name-${i}`)
        const priceContainer = document.getElementById(`price-${i}`)
        const imageContainer = document.getElementById(`image-${i}`) 

        nameContainer.textContent = data[i].name
        priceContainer.textContent = data[i].price + '€'

        const imageUrl = `https://api.kedufront.juniortaker.com/item/picture/${data[i].image}`
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl
        imageContainer.appendChild(imageElement)
        imageElement.src = imageUrl
        imageElement.style.cssText = `
            width: 320px;
            height: 310px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        `
    }
}

function popularItemMainPage(data) {
    const nameContainer = document.getElementById('popular-name')
    const descContainer = document.getElementById('popular-desc')
    const buttonContainer = document.getElementById('popular-button')
    const imageContainer = document.getElementById('popular-image')

    nameContainer.textContent = data[2].name + ' !'
    descContainer.textContent = data[2].description
    buttonContainer.textContent = 'Shop ' + data[2].name
    
    const imageUrl = 'https://api.kedufront.juniortaker.com/item/picture/3'
    const imageElement = document.createElement('img')
    imageElement.src = imageUrl
    imageContainer.appendChild(imageElement);
    imageElement.style.cssText = `
        width: 550px;
    `
}

callApi()
// function item_shop_section(data) {
//         const container_main_product = document.getElementById(`name_main_product`)
//         const name = data[1].name
//         container_main_product.textContent = name + ' !'

//         const container = document.getElementById('carrousel');
//         container.scrollLeft = 0;

//         const container_desc_mp = document.getElementById('desc_mp')
//         const desc = data[1].description
//         container_desc_mp.textContent = desc

//         const container_bt_mp = document.getElementById('bt_mp')
//         const bt_mp = data[1].name
//         container_bt_mp.textContent = 'Shop ' + bt_mp
//         container_bt_mp.classList.add('center-content');

//         const imageContainer = document.getElementById('photo_mp');
//         const imageUrl = 'https://api.kedufront.juniortaker.com/item/picture/2';
//         const imageElement = document.createElement('img');
//         imageElement.src = imageUrl;
//         imageElement.style.width = '550px'
//         imageContainer.appendChild(imageElement);

//         const imageContainerItem_id_1 = document.getElementById('p_item_1');
//         const imageUrl_id_1 = 'https://api.kedufront.juniortaker.com/item/picture/1';
//         imageElement_id_1 = document.createElement('img');
//         imageElement_id_1.src = imageUrl_id_1;
//         imageElement_id_1.style.width = '320px'
//         imageElement_id_1.style.height = '310px'
//         imageElement_id_1.style.borderTopLeftRadius = '20px'
//         imageElement_id_1.style.borderTopRightRadius = '20px'
//         imageContainerItem_id_1.appendChild(imageElement_id_1);

//         const imageContainerItem_id_2 = document.getElementById('p_item_2');
//         const imageUrl_id_2 = 'https://api.kedufront.juniortaker.com/item/picture/2';
//         imageElement_id_2 = document.createElement('img');
//         imageElement_id_2.src = imageUrl_id_2;
//         imageElement_id_2.style.width = '320px'
//         imageElement_id_2.style.height = '310px'
//         imageElement_id_2.style.borderTopLeftRadius = '20px'
//         imageElement_id_2.style.borderTopRightRadius = '20px'
//         imageContainerItem_id_2.appendChild(imageElement_id_2);

//         const imageContainerItem_id_3 = document.getElementById('p_item_3');
//         const imageUrl_id_3 = 'https://api.kedufront.juniortaker.com/item/picture/3';
//         imageElement_id_3 = document.createElement('img');
//         imageElement_id_3.src = imageUrl_id_3;
//         imageElement_id_3.style.width = '320px'
//         imageElement_id_3.style.height = '310px'
//         imageElement_id_3.style.borderTopLeftRadius = '20px'
//         imageElement_id_3.style.borderTopRightRadius = '20px'
//         imageContainerItem_id_3.appendChild(imageElement_id_3);

//         const imageContainerItem_id_4 = document.getElementById('p_item_4');
//         const imageUrl_id_4 = 'https://api.kedufront.juniortaker.com/item/picture/4';
//         imageElement_id_4 = document.createElement('img');
//         imageElement_id_4.src = imageUrl_id_4;
//         imageElement_id_4.style.width = '320px'
//         imageElement_id_4.style.height = '310px'
//         imageElement_id_4.style.borderTopLeftRadius = '20px'
//         imageElement_id_4.style.borderTopRightRadius = '20px'
//         imageContainerItem_id_4.appendChild(imageElement_id_4);

//         const imageContainerItem_id_5 = document.getElementById('p_item_5');
//         const imageUrl_id_5 = 'https://api.kedufront.juniortaker.com/item/picture/5';
//         imageElement_id_5 = document.createElement('img');
//         imageElement_id_5.src = imageUrl_id_5;
//         imageElement_id_5.style.width = '320px'
//         imageElement_id_5.style.height = '310px'
//         imageElement_id_5.style.borderTopLeftRadius = '20px'
//         imageElement_id_5.style.borderTopRightRadius = '20px'
//         imageContainerItem_id_5.appendChild(imageElement_id_5);

//         const imageContainerItem_id_6 = document.getElementById('p_item_6');
//         const imageUrl_id_6 = 'https://api.kedufront.juniortaker.com/item/picture/6';
//         imageElement_id_6 = document.createElement('img');
//         imageElement_id_6.src = imageUrl_id_6;
//         imageElement_id_6.style.width = '320px'
//         imageElement_id_6.style.height = '310px'
//         imageElement_id_6.style.borderTopLeftRadius = '20px'
//         imageElement_id_6.style.borderTopRightRadius = '20px'
//         imageContainerItem_id_6.appendChild(imageElement_id_6);

//         const container_name_item_1 = document.getElementById('name_item_1')
//         const name_item_1 = data[0].name
//         container_name_item_1.textContent = name_item_1

//         const container_name_item_2 = document.getElementById('name_item_2')
//         const name_item_2 = data[1].name
//         container_name_item_2.textContent = name_item_2

//         const container_name_item_3 = document.getElementById('name_item_3')
//         const name_item_3 = data[2].name
//         container_name_item_3.textContent = name_item_3

//         const container_name_item_4 = document.getElementById('name_item_4')
//         const name_item_4 = data[3].name
//         container_name_item_4.textContent = name_item_4

//         const container_name_item_5 = document.getElementById('name_item_5')
//         const name_item_5 = data[4].name
//         container_name_item_5.textContent = name_item_5

//         const container_name_item_6 = document.getElementById('name_item_6')
//         const name_item_6 = data[5].name
//         container_name_item_6.textContent = name_item_6

//         const container_price_item_1 = document.getElementById('price_item_1')
//         const price_item_1 = data[0].price
//         container_price_item_1.textContent = 'EU ' + price_item_1 + '€'

//         const container_price_item_2 = document.getElementById('price_item_2')
//         const price_item_2 = data[1].price
//         container_price_item_2.textContent = 'EU ' + price_item_2 + '€'

//         const container_price_item_3 = document.getElementById('price_item_3')
//         const price_item_3 = data[2].price
//         container_price_item_3.textContent = 'EU ' + price_item_3 + '€'

//         const container_price_item_4 = document.getElementById('price_item_4')
//         const price_item_4 = data[3].price
//         container_price_item_4.textContent = 'EU ' + price_item_4 + '€'

//         const container_price_item_5 = document.getElementById('price_item_5')
//         const price_item_5 = data[4].price
//         container_price_item_5.textContent = 'EU ' + price_item_5 + '€'

//         const container_price_item_6 = document.getElementById('price_item_6')
//         const price_item_6 = data[5].price
//         container_price_item_6.textContent = 'EU ' + price_item_6 + '€'

//         document.getElementById('logo').addEventListener('click', function() {
//             window.location.href = 'index.html';
//         });

//         document.getElementById('p_item_1').addEventListener('click', function() {
//             window.location.href = 'product1.html';
//         });
//         document.getElementById('p_item_2').addEventListener('click', function() {
//             window.location.href = 'product2.html';
//         });
//         document.getElementById('p_item_3').addEventListener('click', function() {
//             window.location.href = 'product3.html';
//         });
//         document.getElementById('p_item_4').addEventListener('click', function() {
//             window.location.href = 'product4.html';
//         });
//         document.getElementById('p_item_5').addEventListener('click', function() {
//             window.location.href = 'product5.html';
//         });
//         document.getElementById('p_item_6').addEventListener('click', function() {
//             window.location.href = 'product6.html';
//         });

//         document.getElementById('logo').addEventListener('click', function() {
//             window.location.href = 'index.html';
//         });
// }


