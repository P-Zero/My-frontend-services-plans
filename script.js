const cardContainer = document.querySelector(".card__container")
const planCards = []

planCards.push({
    name: 'Basic',
    time: '15 Dias',
    feature: 'Mobile & Desktop',
    feature2: 'UI eficiente e intuitivo',
    feature3: 'Animaciones',
    feature4: 'Diseño Custom',
    feature5: 'Cambios Profundos Mensuales',
    icon: './images/checkmark-circle-outline.png',
    icon2: './images/checkmark-circle-outline.png',
    icon3: './images/crossmark-circle-outline.png',
    icon4: './images/crossmark-circle-outline.png',
    icon5: './images/crossmark-circle-outline.png',
    price: '90'
});
planCards.push({
    name: 'Standard',
    time: '30 Dias',
    feature: 'Mobile & Desktop',
    feature2: 'UI eficiente e intuitivo',
    feature3: 'Animaciones',
    feature4: 'Diseño Custom',
    feature5: 'Cambios Profundos Mensuales',
    icon: './images/checkmark-circle-outline.png',
    icon2: './images/checkmark-circle-outline.png',
    icon3: './images/checkmark-circle-outline.png',
    icon4: './images/crossmark-circle-outline.png',
    icon5: './images/one-circle-outline.png',
    price: '180'
});
planCards.push({
    name: 'Expert',
    time: '60 Dias',
    feature: 'Mobile & Desktop',
    feature2: 'UI eficiente e intuitivo',
    feature3: 'Animaciones',
    feature4: 'Diseño Custom',
    feature5: 'Cambios Profundos Mensuales',
    icon: './images/checkmark-circle-outline.png',
    icon2: './images/checkmark-circle-outline.png',
    icon3: './images/checkmark-circle-outline.png',
    icon4: './images/checkmark-circle-outline.png',
    icon5: './images/two-circle-outline.png',
    price: '360'
});
    
function renderProducts(arr) {
    for (cards of arr) {
        const card = document.createElement('div')
        const name = document.createElement('p')
        const time = document.createElement('p')
        const list = document.createElement('ul')
        const feature = document.createElement('li')
        const feature2 = document.createElement('li')
        const feature3 = document.createElement('li')
        const feature4 = document.createElement('li')
        const feature5 = document.createElement('li')
        const featureP = document.createElement('p')
        const featureImg = document.createElement('img')
        const featureP2 = document.createElement('p')
        const featureImg2 = document.createElement('img')
        const featureP3 = document.createElement('p')
        const featureImg3 = document.createElement('img')
        const featureP4 = document.createElement('p')
        const featureImg4 = document.createElement('img')
        const featureP5 = document.createElement('p')
        const featureImg5 = document.createElement('img')
        const price = document.createElement('p')
        const priceSpan = document.createElement('span')
        

        card.classList.add('card')
        name.classList.add("name")
        name.innerText = cards.name
        time.classList.add('time')
        time.innerText = cards.time
        list.classList.add('list')
        feature.classList.add('features')
        feature2.classList.add('features')
        feature3.classList.add('features')
        feature4.classList.add('features')
        feature5.classList.add('features')
        featureP.innerText = cards.feature
        featureP2.innerText = cards.feature2
        featureP3.innerText = cards.feature3
        featureP4.innerText = cards.feature4
        featureP5.innerText = cards.feature5
        featureImg.setAttribute('src', cards.icon)
        featureImg2.setAttribute('src', cards.icon2)
        featureImg3.setAttribute('src', cards.icon3)
        featureImg4.setAttribute('src', cards.icon4)
        featureImg5.setAttribute('src', cards.icon5)
        price.classList.add('price')
        price.innerText = 'Precio Final: $'
        priceSpan.classList.add('price__span')
        priceSpan.innerText = cards.price

        card.append(name, time, list, price)
        list.append(feature, feature2, feature3, feature4, feature5)
        feature.append(featureP, featureImg)
        feature2.append(featureP2, featureImg2)
        feature3.append(featureP3, featureImg3)
        feature4.append(featureP4, featureImg4)
        feature5.append(featureP5, featureImg5)
        price.append(priceSpan)
        cardContainer.append(card)
    }
}

renderProducts(planCards)