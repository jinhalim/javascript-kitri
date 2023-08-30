# 2일차

### 1. 배열(immutable 연습)
    ES-KITRI/functionDemo2.js
### 2. 펼침연산자/구조분해
- `Spread operator` 펼침연산자 : 배열이나 객체를 쉽게 복사하여 합칠수 있게 해줌.
    + 종류
        <br>배열 펼침 / 객체 펼침
        ```js
        const arr = [1,2,3];
        console.log([...arr,4,5,6]); //[1,2,3,4,5,6]

        const obj = {a: 1,b: 2};
        console.log({...obj,c :7}); //{a:1,b:2,c:7}
        ```
        <br>배열 복사 / 객체 복사
        ```js
        const arr = [1,2,3];
        const arrCopy = [...arr];
        
        const obj = {a: 1,b: 2};
        const objCopy = {...obj}; 
        ```
        <br>배열에서의 함수 파라미터
        ```js
        const nums = [1,2,3];
        console.log(Math.max(...nums)); // 3
        ```
        <br>객체 속성 오버라이드
        ```js
        const obj1 = {a:1,b:2,c:3};
        const obj2 = {...obj1,b:6}; //{a:1,b:6,c:3}
        ```
        <br>배열을 문자열로 펼치기
        ```js
        const str = 'hello';
        const chars = [...str]; //['h','e','l','l','o']
        ```
- `Destructuring` 구조분해
    + `Destructuring Assignment` 구조 분해 할당
    <br> 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 할당
    <br> 클린 코드가 되며, 변수 할당을 간결하게 함.
    + 종류
        <br>배열 구조분해
        ```js
        const arr = [1,2,3,4,5];
        const [a,b,c,...rest] = arr;
        console.log(a,b,c); // 1 2 3
        console.log(rest); //[4,5]
        ```
        <br>객체 구조분해
        ```js
        const obj = {a:1,b:2,c:3};
        const {a,b,c} = obj;
        console.log(a,b,c); // 1 2 3
        const {a : newA,b: newB,c: newC} = obj;
        console.log(newA,newB,newC); // 1 2 3
        ```
        <br>함수 파라미터에서의 구조분해
        ```js
        const obj = {a:1,b:2,c:3};
        function print({a,b,c}) {
            console.log(a,b,c);
        }
        print(obj);
        ```
### 3. 클래스/프로토타입

-

### 4. 브라우저 내장객체
 