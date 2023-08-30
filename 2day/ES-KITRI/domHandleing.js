
// 버튼을 선택 (조회)한다,
// 버튼에 이벤트를 등록한다.
const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', function () {
    console.log('cliek');
    const theTag = document.getElementById('products');
    theTag.innerText = 'product list';
});
//특정태그 선택
// const theTag = document.getElementById('products');
// console.log(theTag);
// theTag.innerText = 'product list';
