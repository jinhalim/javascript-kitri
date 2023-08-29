## 1 일차


1. 개발 환경설정
   - VScode 설치
   - ESLint, vscode-icons, Live Server extensions install
   - hello world 해보기
   ##### ES-KITRI/index.js
   ```html
   <!DOCTYPE html>
   <html lang="en">

   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
   </head>

   <body>
      <p>hihihihihihihihihi iam iam</p>
      <script src="./app.js"></script>
   </body>

   </html>
   ```
   ##### ES-KITRI/app.js
   ```JavaScript
   console.log('hello world~!');
   console.log('안녕하세요');
   ```
2. 변수
   - 데이터 선언 : var / let / const
   - 기본 데이터 타입
   <br><strong>자동으로 타입이 추론 됨.</strong>
   <br> 이런 성질로 인해 타입스크립트가 요즘 사용되는 추세
      ```js
      var num1 =  8;
      let num2 = 10;
      const PI = 3.14; 
      ```
      + 문자 : string
         ```js
         let string = 'string';
         console.log(typeof(string)); // string
         ```
      + 숫자 : number(정수, 소수, Boolean)
         ```js
         let num = 1;
         console.log(typeof(num)); // number
         ```
      + 정의되지 않은 타입 : undefined, null
         ```js
         let emtpy = null;
         let u = undefined;
         console.log(typeof(emtpy)); // object
         console.log(typeof(u)); // undefined
         ```
      `undefined` : 원시값으로 선언후 값을 할당하지 않는 것
      <br>`null` : 원시값 중 하나로 의도적으로 비어있음을 표현하는 것
      <br>( js에서 잘 안씀 )
   - 다중값 데이터 타입
       + `Array` : []
         <br>index을 통해서 element 접근 가능
         ```js
         const arr1 = new Array('a','b','c');
         const arr2 = ['a','b','c'];
         console.log(typeof arr1, typeof arr2); // Array Array
         ```
         <br>ES-KITRI/arrayDemo.js
         ```js
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
         
         favoriteColors
            .forEach(color => console.log(color));
         /* red
            blue
            pink
            violet
            black */
         ```
       + `Object` : {}
         <br>Key : Value 조합으로 Key를 이용해서 element 접근 가능(Key는 String타입)
         ```js
         const obj = {name : 'jin', age :27};
         console.log(typeof obj); // Object
         console.log(obj['name']); // jin
         // 축약된 obj 선언 방법
         const age = 10;
         const id = 20;
         const obj2 = {age , id};
         console.log(obj2); 
         // {age : 10 , id : 20}
         ```
         <br>arr + obj 형태
         ```js
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
         ```
         <br> dept 2인 obj 형태
         ```js
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
         ```
3. 조건문&반복문
   - IF 문 ( + 조건부 삼항 연산자 )
      ```js
      if(age > 19){
         console.log('성인');
      }else if(age > 7){
         console.log('학생');
      }else {
         console.log('유아');
      }
      ```
      조건부 삼항 연산자(참: 거짓)
      ```js
      let result = age > 20 ? console.log('성인') : console.log('미성년자');
      ```
   - SWITCH문
      ```js
      switch(age){
         case 10 :
            console.log('10살');
            break;
         default :
         break;
      };
      ```
   - FOR 문
      + for in : key를 반환
         ```js
         for(let key in members){
            console.log(members[key]);
         };
         ```
      + for of : value을 반환
         ```js
         for(let value of members){
            console.log(value);
         };
         ```
      <br> `continue` : 코드 중단후 다음 반복 수행
      <br> `break` :  반복문 중단
4. 함수
   - Function 정의 방법
      + Named Function : 일반 함수
         ```js
         function funName(parameters){
            console.log('hi');
         } // 함수 정의

         funName(); // 함수 실행
         ```
      + Anonymous Function : 익명 함수
         ```js
         const readName = function(name){
            return `hi ${name}`;
         };
         readName('bee');
         ``` 
      + Arrow Function : 화살표 함수
         ```js
         const readName = (name) => `hi ${name}`;
         readName('bee');
         ```
   - Function 특징
      + 일급 객체 : 다른 변수에 `할당` or `인자` or `결과`로 반환 가능
      + `Closer` 클로저 : 함수 자신이 생성될때의 환경을 `기억`하며 그 특징을 `클로저`라고 함.
      + `Hoisting` 호이스팅 : 함수 선언은 scope의 최상단으로 끌어올려지는 것 <br>( 일반 함수만 )
   - ES6+ 기능
      + default parameter(optional) 기본 파라미터 
         ```js
         function callName(name = 'World') {
            console.log(`hi ${name}`);
         }
         callName(); //hi World
         callName('JIN'); // hi JIN
         ```
         장점 : 예시를 알수 있으며, 가독성이 좋아진다.
         <br>단점 : parameter가 여러개가 되는 순간 어떤 값이 default로 등록 되는지 알수 없다.
         <br>( 그래서 named parameter라는 기능으로 대체하면 해결이 가능하기도 하다.)
      + Arrow Function
         ```js
         // Arrow function은 한줄일땐 return도 생략 가능
         const addTwoNumbers4 = (firstNumber, secondNumber) => firstNumber + secondNumber;
         ```
      + Rest parameter
         <br>파라미터를 배열로 그룹화 할수 있음
         ```js
         function sum(...numbers){
            return numbers.reduce((pre,curr) => {
               return pre + curr;
            });
         }
         console.log(sum(1,2,3,4)); // 10
         ```
      + Spread 연산자 
         <br>배열이나 객체를 개별요소로 확장 가능하게 해줌
         <br> 함수 호출시 매개변수 전달시 유용
         ```js
         const numbers = [1,2,3];
         function sum (a,b,c,){
            return a + b + c;
         }
         console.log(sum(...numbers)); // 6
         ```
5. 배열 데이터 처리
   - 처리 방식
      + Mutable : 원복 배열이 변경되는 방식
         <br>원복데이터 보존해야하는 경우 비추
         <br>메모리 효율성 좋으며, 동작이 직관적
         ```js
         let arr = [1,2,3,4,5];
         arr.push(6); // [1,2,3,4,5,6]
         arr.pop(); // [1,2,3,4,5]
         arr.shift();  // [2,3,4,5]
         arr.unshift(1);  // [1,2,3,4,5]
         arr.reverse(); // [5,4,3,2,1]
         ```
      + Immutable : 원복을 변경하지 않고 변경된 복사본을 반환
         <br>복잡한 상태관리에서 주로 사용
         <br> 리액티브 프로그래밍
         <br> `함수형 프로그래밍`
         ```js
         console.log('abcabc'.slice(1, 3)); // 'bc'
         console.log('abcabc'.concat('a')); // 'abcabca'
         console.log('abcabc'.join('123')); // 'abcabc123'
         console.log([1,2,3].map(ele => ele + 3)); // 함수형 [4,5,6]
         console.log([1,2,3].filter(ele => ele > 2)); // 함수형 [3]
         console.log([1,2,3].reduce()); // 함수형
         console.log([1,2,3].forEach(ele => console.log(ele))); // 함수형
         ```