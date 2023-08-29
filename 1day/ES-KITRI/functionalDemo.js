//mutable ..push() pop()
const testArr = [1, 2, 3, 4, 5];
//push  배열의 맨끝에 아이템 추가

//mutable 방식
console.log(testArr.push(6), testArr);
//immutable 방식
console.log(testArr.slice(1, 3), testArr);