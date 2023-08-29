function addTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const addTwoNumbers2 = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const addTwoNumbers3 = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}
// Arrow function은 한줄일땐 return도 생략 가능
const addTwoNumbers4 =
    (firstNumber, secondNumber) => firstNumber + secondNumber;
const result = addTwoNumbers2(3, 5);
console.log(result); // 8