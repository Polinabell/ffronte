let name = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");

alert(`Привет, ${name}! Вам ${age} лет.`);
console.log(`Привет, ${name}! Вам ${age} лет.`);


let name2 = prompt("Введите ваше имя:");
let age2 = prompt("Введите ваш возраст:");

alert(`Привет, ${name2}! Вам ${age2} лет.`);
console.log(`Привет, ${name2}! Вам ${age2} лет.`);

if (age2 >= 18) {
    alert("Вы совершеннолетний");
    console.log("Вы совершеннолетний");
} else {
    alert("Вы несовершеннолетний");
    console.log("Вы несовершеннолетний");
}


let randomNumber = Math.floor(Math.random() * 10) + 1;

let userGuess;
console.log(randomNumber);

while (userGuess !== randomNumber) {
    userGuess = parseInt(prompt("Угадайте число от 1 до 10"));

    if (userGuess === randomNumber) {
        alert("Поздравляем! Вы угадали число!");
        console.log("Поздравляем! Вы угадали число!");
    } else {
        if (userGuess < 5) {
            alert("Неправильно. Введенное число меньше 5.");
        } else {
            alert("Неправильно. Введенное число больше 5.");
        }
        console.log(`Попробуйте снова. Загаданное число было ${randomNumber}`);
    }
}


const correctPassword = "12345";

let password = prompt("Введите пароль:");

if (password && password === correctPassword) {
    alert("Доступ разрешен");
    console.log("Доступ разрешен");
} else {
    alert("Доступ запрещен");
    console.log("Доступ запрещен");
}


let number1 = parseFloat(prompt("Введите первое число:"));
let number2 = parseFloat(prompt("Введите второе число:"));
let operator = prompt("Введите оператор (+, -, *, /):");

let result;
if (operator === "+") {
    result = number1 + number2;
} else if (operator === "-") {
    result = number1 - number2;
} else if (operator === "*") {
    result = number1 * number2;
} else if (operator === "/") {
    result = number2 !== 0 ? number1 / number2 : "Деление на ноль невозможно";
} else {
    result = "Неверный оператор";
}

alert(`Результат: ${result}`);
console.log(`Результат: ${result}`);