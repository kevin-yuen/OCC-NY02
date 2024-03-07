// ex 1
const greet = name => {
    console.log(`Hello, ${name}`);
}
greet("Jack");

// ex 2
const isEven = num => {
    return num % 2 === 0? `${num} is an even number.` : `${num} is an odd number.`;
}
console.log(isEven(4));
console.log(isEven(5));

// ex 3
const mathOperation = (x, y, operationCB) => {
    console.log(operationCB(x, y));
}

const add = (x, y) => `Sum of ${x} and ${y}: ` + (x + y);
const subtract = (x, y) => `Difference between ${x} and ${y}: ` + (x - y);
const multiply = (x, y) => `Product of ${x} and ${y}: ` + (x * y);
const divide = (x, y) => `Quotient of ${x} and ${y}: ` + (x / y);

mathOperation(4, 2, add);
mathOperation(4, 2, subtract);
mathOperation(4, 2, multiply);
mathOperation(4, 2, divide);

// ex 4
const applyFunction = (doubleNumCB, numArr) => {
    let doubleNumArr = [];
    
    for (num of numArr) {
        doubleNumArr.push(doubleNumCB(num))
    }

    return doubleNumArr;
}

const doubleNumber = (num) => num * 2;

console.log(applyFunction(doubleNumber, [1,2,3,4,5]));
