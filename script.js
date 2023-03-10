const cardContainer = document.querySelector('.card__container')
const cards = []
let cardGenerator

class Card{
    constructor(name, time, price, id, feature, alt){
        this.name = name
        this.time = time
        this.price = price
        this.id = id
        this.feature = []
    }
}

const basic = new Card('Basic', '15 Dias', '90', 'basic')
const standard = new Card('Standard', '30 Dias', '180', 'standard')
const expert = new Card('Expert', '60 Dias', '360', 'expert')

basic.feature.push(
    {icon:'./images/checkmark-circle-outline.webp', alt: 'CheckIcon',},
    {icon:'./images/checkmark-circle-outline.webp', alt: 'CheckIcon',},
    {icon:'./images/crossmark-circle-outline.webp', alt: 'CrossIcon',},
    {icon:'./images/crossmark-circle-outline.webp', alt: 'CrossIcon',},
    {icon:'./images/crossmark-circle-outline.webp', alt: 'CrossIcon',},
)
standard.feature.push(
    {icon:'./images/checkmark-circle-outline.webp', alt: 'CheckIcon',},
    {icon:'./images/checkmark-circle-outline.webp', alt: 'CheckIcon',},
    {icon:'./images/checkmark-circle-outline.webp', alt: 'CheckIcon',},
    {icon:'./images/crossmark-circle-outline.webp', alt: 'CrossIcon',},
    {icon:'./images/one-circle-outline.webp', alt: 'OneIcon',},
)
expert.feature.push(
    {icon:'./images/checkmark-circle-outline.webp', alt: 'CheckIcon',},
    {icon:'./images/checkmark-circle-outline.webp', alt: 'CheckIcon',},
    {icon:'./images/checkmark-circle-outline.webp', alt: 'CheckIcon',},
    {icon:'./images/checkmark-circle-outline.webp', alt: 'CheckIcon',},
    {icon:'./images/two-circle-outline.webp', alt: 'TwoIcon',},
)

cards.push(basic, standard, expert)

function cardsGenerator(){

    cards.forEach((cards) => {
        cardGenerator = `
        <div class='card'>
            <p class='name'>${cards.name}</p>
            <p class='time'>${cards.time}</p>
            <ul class='list ${cards.id}'>
            </ul>
            <p class='price'>Precio Final: $<span class='price__span'>${cards.price}</span></p>
        </div>
        `

        cardContainer.innerHTML += cardGenerator 
    })

    const featureContainerBasic = document.querySelector('.basic')
    const featureContainerStandard = document.querySelector('.standard')
    const featureContainerExpert = document.querySelector('.expert')

    function featureTemplate(f0, f1, f2, f3, f4, a0, a1, a2, a3, a4){
        return `
        <li class='features'>
            <p>Mobile &amp; Desktop</p><img src=${f0} alt='${a0}'>
        </li>
        <li class='features'>
            <p>UI eficiente e intuitivo</p><img src=${f1} alt='${a1}'>
        </li>
        <li class='features'>
            <p>Animaciones</p><img src=${f2} alt='${a2}'>
        </li>
        <li class='features'>
            <p>Diseño Custom</p><img src=${f3} alt='${a3}'>
        </li>
        <li class='features'>
            <p>Cambios Profundos Mensuales</p><img src=${f4} alt=${a4}}>
        </li>
        `
    }

    const featureTemplateBasic = featureTemplate(basic.feature[0].icon, basic.feature[1].icon, basic.feature[2].icon, basic.feature[3].icon, basic.feature[4].icon, basic.feature[0].alt, basic.feature[1].alt, basic.feature[2].alt, basic.feature[3].alt, basic.feature[4].alt)

    const featureTemplateStandard = featureTemplate(standard.feature[0].icon, standard.feature[1].icon, standard.feature[2].icon, standard.feature[3].icon, standard.feature[4].icon, standard.feature[0].alt, standard.feature[1].alt, standard.feature[2].alt, standard.feature[3].alt, standard.feature[4].alt)

    const featureTemplateExpert = featureTemplate(expert.feature[0].icon, expert.feature[1].icon, expert.feature[2].icon, expert.feature[3].icon, expert.feature[4].icon, expert.feature[0].alt, expert.feature[1].alt, expert.feature[2].alt, expert.feature[3].alt, expert.feature[4].alt)

    featureContainerBasic.innerHTML = featureTemplateBasic
    featureContainerStandard.innerHTML = featureTemplateStandard
    featureContainerExpert.innerHTML = featureTemplateExpert
}

cardsGenerator()