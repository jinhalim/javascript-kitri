## 1 일차
==================
1. 개발 환경설정
   - VScode 설치
   - ESLint, vscode-icons, Live Server extensions install
   - hello world불러오기
   
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
2. 변수 기본 컨셉
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
      undefined : 원시값으로 선언후 값을 할당하지 않는 것
      <br>null : 원시값 중 하나로 의도적으로 비어있음을 표현하는 것(js에서 잘 안씀)
   - 다중값 데이터 타입
       + Array : []
         <br>index를 통해서 element 접근 가능
         ```js
         const arr1 = new Array("a","b","c");
         const arr2 = ["a","b","c"];
         console.log(typeof arr1, typeof arr2); // Array Array
         ```
       + Object : {}
         <br>Key : Value 조합으로 Key를 이용해서 element 접근 가능
         ```js
         const obj = {name : "jin", age :27};
         console.log(typeof obj); // Object
         ```