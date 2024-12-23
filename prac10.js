// Объявляем переменные
let name = "Полина"; 
let age = 19; 

// Условие проверки возраста
if (age >= 18) {
    console.log("Вы совершеннолетний");
} else {
    console.log("Вы несовершеннолетний");
}


//2 задание
// Цикл for для вывода чисел от 1 до 10
console.log("Числа от 1 до 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Цикл while для вывода чисел от 10 до 1
console.log("Числа от 10 до 1:");
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

//3 задание
//массивы
const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];


lectures.push('Тема 4');
practices.unshift('Практика 0');

// Функция для вывода массива в строку 
function arrayToString(array) {
    return array.join(', ');
}
console.log("Темы лекций через запятую: " + arrayToString(lectures));
console.log("Практики через запятую: " + arrayToString(practices));



//4 задание
// Функция, которая возвращает темы, начинающиеся с буквы "О"
function filterTopicsByLetterO(topics) {
    return topics.filter(topic => topic.startsWith('О'));
}

// Пример массива тем лекций
const allLectures = ['Основы JavaScript', 'Тема 1', 'Объекты', 'Тема 2'];


const topicsWithO = filterTopicsByLetterO(allLectures);

// Выводим результат
console.log("Темы, начинающиеся с буквы 'О': " + topicsWithO.join(', '));