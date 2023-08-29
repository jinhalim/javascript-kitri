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