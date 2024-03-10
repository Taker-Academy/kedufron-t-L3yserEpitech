callApi()

function callApi() {
    // Déclare une variable url avec l'URL de l'API
    const url = "https://api.kedufront.juniortaker.com/item/"

    // Traite la réponse de la requête GET
    axios.get(url)
    .then(response => {
        const data = response.data
        itemMainPage(data)
        popularItemMainPage(data)
        eventClick(data)
    })

    // Traite l'erreur en cas d'échec de la requête GET
    .catch(error => {
        console.error('Erreur lors de la requête GET', error);
    })
}

function itemMainPage(data) {
    // Boucle sur chaque élément du tableau data
    for (let i = 0; i < data.length; i++) {
        // Récupère les éléments HTML avec les ID correspondant à l'index i
        const nameContainer = document.getElementById(`name-${i}`)
        const priceContainer = document.getElementById(`price-${i}`)
        const imageContainer = document.getElementById(`image-${i}`) 

        // Met à jour le contenu textuel des éléments HTML
        nameContainer.textContent = data[i].name
        priceContainer.textContent = data[i].price + '€'

        // Met à jour les images des éléments et leur css
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
    // Récupère les éléments HTML avec les ID correspondants
    const nameContainer = document.getElementById('popular-name')
    const descContainer = document.getElementById('popular-desc')
    const buttonContainer = document.getElementById('popular-button')
    const imageContainer = document.getElementById('popular-image')

    // Met à jour le contenu textuel des éléments HTML
    nameContainer.textContent = data[2].name + ' !'
    descContainer.textContent = data[2].description
    buttonContainer.textContent = 'Shop ' + data[2].name
    
     // Met à jour les images des éléments et leur css
    const imageUrl = 'https://api.kedufront.juniortaker.com/item/picture/3'
    const imageElement = document.createElement('img')
    imageElement.src = imageUrl
    imageContainer.appendChild(imageElement)
    imageElement.style.cssText = `
        width: 550px;
    `
}

function eventClick(data) {
    // Récupère tous les éléments HTML dont l'ID commence par "image-"
    const imagesContainer = document.querySelectorAll('[id^="image-"]');

    // Pour chaque élément HTML dans imagesContainer
    imagesContainer.forEach((image) => {
        // Ajoute un écouteur d'événement sur l'élément HTML pour l'événement "click"
        image.addEventListener('click', function() {
            item = this.id.split('-')[1]
             // Appelle la fonction returnProductPage() avec les données et l'index de l'élément cliqué
             // Cette fonction permet d'afficher la page produit de chaque item
            returnProductPage(data, item)
        })
    })
}

function returnProductPage(data, item) {
    // Récupère le contenu du fichier HTML "product.html"
    axios.get('product.html')
    .then((response) => {
        const html = response.data

        // Insérer le contenu de product.html dans la page actuelle
        const productPage = document.createElement('div')
        productPage.innerHTML = html

        // Remplacer le contenu de la balise <div> avec l'ID "image" par l'image du produit
        const imageContainer = productPage.querySelector(`#image`)
        const image = item + 1
        const imageUrl = `https://api.kedufront.juniortaker.com/item/picture/${data[item].image}`
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl
        imageContainer.appendChild(imageElement)
        imageElement.style.cssText = `
            width: 500px;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        `

        // Remplacer le contenu des balises <h1>, <p> et <span> par les données du produit
        const nameContainer = productPage.querySelector('#name')
        const priceContainer = productPage.querySelector('#price')
        const descContainer = productPage.querySelector('#desc')

        nameContainer.textContent = data[item].name
        priceContainer.textContent = `EU ${data[item].price}€`
        descContainer.textContent = `${data[item].description} Fabriqué le ${data[item].createdIn}`

        // Ajoute un event listener sur le logo pour retourner à la page d'accueil
        const logoContainer = productPage.querySelector('#logo')
        logoContainer.addEventListener('click', function() {
            returnIndexPage(data)
        })

        // Afficher la page produit dans le navigateur
        const body = document.querySelector('body')
        body.innerHTML = ''
        body.appendChild(productPage)
    })
    .catch(error => {
        console.error('Erreur lors de la requête GET', error);
    })
}

function returnIndexPage(data) {
    // Récupère le contenu du fichier HTML "index.html"
    axios.get('index.html')
    .then((response) => {
        const html = response.data

        // Insérer le contenu de product.html dans la page actuelle
        const productPage = document.createElement('div')
        productPage.innerHTML = html

        // Parcourt tous les éléments de données et remplit les conteneurs correspondants
        for (let i = 0; i < data.length; i++) {
            const nameContainer = productPage.querySelector(`#name-${i}`)
            const priceContainer = productPage.querySelector(`#price-${i}`)
            const imageContainer = productPage.querySelector(`#image-${i}`) 

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

        // Remplit les conteneurs pour l'élément populaire
        const popularNameContainer = productPage.querySelector(`#popular-name`)
        const popularDescContainer = productPage.querySelector(`#popular-desc`)
        const popularButtonContainer = productPage.querySelector(`#popular-button`)
        const popularImageContainer = productPage.querySelector('#popular-image')

        popularNameContainer.textContent = data[2].name + ' !'
        popularDescContainer.textContent = data[2].description
        popularButtonContainer.textContent = 'Shop ' + data[2].name
        
        const popularImageUrl = `https://api.kedufront.juniortaker.com/item/picture/${3}`
        const popularImageElement = document.createElement('img');
        popularImageElement.src = popularImageUrl
        popularImageContainer.appendChild(popularImageElement)
        popularImageElement.style.cssText = `
            width: 550px;
        `

        // Ajoute des écouteurs d'événements sur les images des produits pour afficher la page produit correspondante
        const productContainer = productPage.querySelectorAll('[id^="image-"]');
        productContainer.forEach((image) => {
            image.addEventListener('click', function() {
                item = this.id.split('-')[1]
                returnProductPage(data, item)
            })
        })

        // Affiche la page d'accueil dans le navigateur
        const body = document.querySelector('body')
        body.innerHTML = ''
        body.appendChild(productPage)
    })
}
