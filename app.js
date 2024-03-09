function callApi() {
    const url = "https://api.kedufront.juniortaker.com/item/"

    axios.get(url)
    .then(response => {
        const data = response.data
        itemMainPage(data)
        popularItemMainPage(data)
        eventClick(data)
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

function eventClick(data) {
    const images = document.querySelectorAll('[id^="image-"]')

    images.forEach((image) => {
        image.addEventListener('click', function() {
            // testFonction(this.id.split('-')[1])
        });
    });
}

callApi()
