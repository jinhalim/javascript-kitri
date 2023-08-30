//백엔드에서 데이터를 가져온다.
//API server의 url
//https://jsonplaceholder.typicode.com/todos
//XMLHttpRequest - ajax
let todos = [];
let en = false;
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(json => {
        todos = json;
        const ulDom = document.getElementsByTagName('ul')[0];

        todos.forEach(ele => {
            const liDom = document.createElement('li');
            liDom.innerText = `${ele.id}번 ${ele.title}`;
            ulDom.appendChild(liDom);
        });
        const button = document.getElementsByTagName('button')[0];
        button.addEventListener('click', function () {
            const theTag = document.getElementById('products');
            if (en) {
                theTag.innerText = '상품목록';
            } else {
                theTag.innerText = 'product list';
            }
            en = !en;
        });
    });

