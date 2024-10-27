export interface Card {
    index: number;
    imgUrl: string;
    title: string;
    paragraph: string;
    price: string;
}

const cards = [{
    title: 'Boiled Eggs',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ',
    imgUrl: '/card-img/Ellipse 1.png',
    index: 1,
    price: '$10.00'
},{
    title: 'RAMEN',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ',
    imgUrl: '/card-img/Ellipse 2.png',
    index: 2,
    price: '$25.00'
},{
    title: 'GRILLED CHICKEN',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ',
    imgUrl: '/card-img/Ellipse 3.png',
    index: 3,
    price: '$45.00'
},{
    title: 'CAKE',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ',
    imgUrl: '/card-img/Ellipse 4.png',
    index: 4,
    price: '$18.00'
},{
    title: 'BURGER',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ',
    imgUrl: '/card-img/Ellipse 5.png',
    index: 5,
    price: '$23.00'
},{
    title: 'PANCAKE',
    paragraph: 'Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. ',
    imgUrl: '/card-img/Ellipse 6.png',
    index: 6,
    price: '$25.00'
}

]

export default cards;