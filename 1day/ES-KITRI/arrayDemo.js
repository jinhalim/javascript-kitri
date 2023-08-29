const favoriteColors = ['red', 'blue', 'pink', 'violet'];
favoriteColors.push('white')
console.log(favoriteColors);
//['red', 'blue', 'pink', 'violet' ,'white']
favoriteColors[4] = 'black';
console.log(favoriteColors);
//['red', 'blue', 'pink', 'violet' ,'black']
for (const color of favoriteColors) {
    console.log(color);
}
/* red
blue
pink
violet
black */

favoriteColors.forEach(color => console.log(color));

//오브젝트 만들기 
const product = {
    id: 1,
    title: '게토레이',
    price: 15000,
    discountRate: 15,
    imageUrl: 'https://wwww.ss.co.kr/gatorade.jpg'
};
//arr + obj
const products = [{
    id: 1,
    title: '당근',
    price: 15000,
    discountRate: 15,
    imageUrl: 'https://wwww.ss.co.kr/gatorade.jpg'
}, {
    id: 2,
    title: '감자',
    price: 15000,
    discountRate: 15,
    imageUrl: 'https://wwww.ss.co.kr/gatorade.jpg'
}, {
    id: 3,
    title: '게토레이',
    price: 15000,
    discountRate: 15,
    imageUrl: 'https://wwww.ss.co.kr/gatorade.jpg'
}];

console.log(products[0]);
console.log(products[0]['title']);

//member 데이터를 obj 생성(dept : 2짜리 생성)
const member = {
    id: 'hahaha',
    name: 'kim su',
    age: 30,
    tag: ['it', 'art', 'billiard', 'hiking'],
    isActive: true,
    address: {
        nationality: 'korea',
        city: 'seoul',
        detail: '123-23'
    }
};
console.log(member['address']['city']);
console.log(member.address.city);
