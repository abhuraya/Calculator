let display = document.getElementById('display');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');
let plus = document.getElementById('plus');
let minus = document.getElementById('subtract');
let divide = document.getElementById('divide');
let multiply = document.getElementById('multiply');
let equals = document.getElementById('equal');


let array = [];
let array1 = [];
let array2 = [];
let sign;

one.addEventListener('click', function() {
    array.push(1);

    display.textContent = array.join('');
});

two.addEventListener('click', function() {
    array.push(2);

    display.textContent = array.join('');
});

three.addEventListener('click', function() {
    array.push(3);

    display.textContent = array.join('');
});

four.addEventListener('click', function() {
    array.push(4);

    display.textContent = array.join('');
});

five.addEventListener('click', function() {
    array.push(5);

    display.textContent = array.join('');
});

six.addEventListener('click', function() {  
    array.push(6);

    display.textContent = array.join('');
});

seven.addEventListener('click', function() {
    array.push(7);

    display.textContent = array.join('');
});

eight.addEventListener('click', function() {
    array.push(8);

    display.textContent = array.join('');
});

nine.addEventListener('click', function() {
    array.push(9);

    display.textContent = array.join('');
});

zero.addEventListener('click', function() {
    array.push(0);

    display.textContent = array.join('');
});

plus.addEventListener('click', function() {
    array1 = array;
    array = [];
    sign = '+';
    display.textContent = array;
    console.log(array1.join(''));
}); 

minus.addEventListener('click', function() {
    array1 = array;
    array = [];
    sign = '-';
    display.textContent = array;
    console.log(array1.join(''));
});

divide.addEventListener('click', function() {
    array1 = array;
    array = [];
    sign = '/';
    display.textContent = array;
    console.log(array1.join(''));
});

multiply.addEventListener('click', function() { 
    array1 = array;
    array = [];
    sign = '*';
    display.textContent = array;
    console.log(array1.join(''));
});

equals.addEventListener('click', function() {
    array2 = array;
    console.log(sign);
    console.log(array2);
    array = [];
    display.textContent = array;
    operator(array1, array2, sign);
});

function operator(array1, array2, sign) {
    let num1 = parseInt(array1.join(''));
    let num2 = parseInt(array2.join(''));
    let result;
    switch(sign) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '*':
            result = num1 * num2;
            break;
    }
    display.textContent = result;
    array = [];
    array1 = [];
    array2 = [];
    console.log(result);
};
