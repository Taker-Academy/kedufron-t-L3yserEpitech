callApi()

data = 0

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
    imageContainer.appendChild(imageElement)
    imageElement.style.cssText = `
        width: 550px;
    `
}

function eventClick(data) {
    const imagesContainer = document.querySelectorAll('[id^="image-"]');
  
    imagesContainer.forEach((image) => {
      image.addEventListener('click', function() {
        const item = this.id.split('-')[1]

        // Récupérer le contenu de product.html depuis le serveur à l'aide d'Axios
        axios.get('product.html')
            .then((response) => {
                const html = response.data
                console.log(item)

                // Insérer le contenu de product.html dans la page actuelle
                const productPage = document.createElement('div')
                productPage.innerHTML = html

                // Remplacer le contenu de la balise <div> avec l'ID "image" par l'image du produit
                const imageContainer = productPage.querySelector('#image')
                const imageUrl = `https://api.kedufront.juniortaker.com/item/picture/${1}`
                imageContainer.innerHTML = `<img src="${imageUrl}">`

                // Remplacer le contenu des balises <h1>, <p> et <span> par les données du produit
                const nameContainer = productPage.querySelector('#name')
                const priceContainer = productPage.querySelector('#price')
                const descContainer = productPage.querySelector('#desc')

                nameContainer.textContent = data[item].name
                priceContainer.textContent = `EU ${data[item].price}€`
                descContainer.textContent = `${data[item].description} Fabriqué le ${data[item].createdIn}`

                // Afficher la page produit dans le navigateur
                const body = document.querySelector('body')
                body.innerHTML = ''
                body.appendChild(productPage)
            })
            .catch(error => {
                console.error('Erreur lors de la requête GET', error);
            })
      })
    })
  }