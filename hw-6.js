/*Задание Викторина*/
function startQuiz() {
    const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let userCorrectAnswerCount = 0;
    for (let i = 0; i <= quiz.length - 1; i++) {
        let userAnswer = prompt(`Вопрос № ${i + 1} ${quiz[i].question} \n ${quiz[i].options}`);
        let correctAnswer = quiz[i].options[quiz[i].correctAnswer - 1].split(". ")
        if (userAnswer === correctAnswer[0] || userAnswer === correctAnswer[1]) {
            userCorrectAnswerCount++
        }
    }
    alert(`Правильных ответов: - ${userCorrectAnswerCount}`)
}

/*Задание №1*/

let arr = [1, 5, 4, 10, 0, 3];
for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === 10) {
        console.log(`Элемент ${i}  равен 10`);
        break;
    }
}


/*Задание №2*/

arr = [1, 5, 4, 10, 0, 3];
for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === 4) {
        console.log(`Элемент ${i}  равен 4`);
        break;
    }
}

/*Задание №3*/

arr = [1, 3, 5, 10, 20];
console.log(arr.join(" "));

/*Задание №4*/

let result = [];

for (let i = 0; i < 3; i++) {
    const inner = [];               // создаём внутренний массив
    for (let j = 0; j < 3; j++) {
        inner.push(1);              // заполняем его единицами
    }
    result.push(inner);             // добавляем внутренний массив во внешний
}

console.log(result);


/*Задание №5*/

arr = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    arr.push(2)
}
console.log(arr);

/*Задание №6*/

arr = [9, 8, 7, 'a', 6, 5];

// 1. Находим индекс 'a' и удаляем её
const index = arr.indexOf('a');
if (index !== -1) {
    arr.splice(index, 1); // удаляем 1 элемент на позиции index
}

// 2. Сортируем числа по возрастанию
arr.sort((a, b) => a - b);

// 3. Выводим массив
console.log(arr); //

/*Задание №7*/

// Исходный массив
let numbers = [9, 8, 7, 6, 5];

// Запрашиваем число у пользователя
const userInput = prompt('Угадайте число:');

// Преобразуем строку в число
const guess = Number(userInput);

// Проверяем, есть ли число в массиве
if (numbers.includes(guess)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

/*Задание №8*/
let letters = "abcdef";

let arrletters = letters.split("")

let arrrevers = arrletters.reverse()
console.log(arrrevers.join("")); //

/*Задание №9*/
let arr2D = [[1, 2, 3], [4, 5, 6]];
result = [];
for (let i = 0; i < arr2D.length; i++) {
    for (let j = 0; j < arr2D[i].length; j++) {
        result.push(arr2D[i][j]);
    }
}
console.log(result);

/*Задание №10*/

numbers = [3, 7, 1, 9, 4, 6, 8, 2, 10, 5];

for (let i = 0; i < numbers.length; i++) {
    // Проверяем, есть ли следующий элемент (i+1 в пределах массива)
    if (i + 1 < numbers.length) {
        const sum = numbers[i] + numbers[i + 1];
        console.log(`Сумма элементов с индексами ${i} и ${i + 1}: ${sum}`);
    } else {
        // Для последнего элемента нет пары – можно пропустить или вывести сообщение
        console.log(`Для последнего элемента (индекс ${i}) нет пары`);
    }
}

/*Задание №11*/

function squareArray(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] ** 2); // или numbers[i] * numbers[i]
    }
    return result;
}

console.log(squareArray([1, 2, 3, 4]));
console.log(squareArray([-2, 0, 5]))

/*Задание №12*/

function getWordsLength(words) {
    const lengths = [];
    for (let i = 0; i < words.length; i++) {
        lengths.push(words[i].length);
    }
    return lengths;
}


console.log(getWordsLength(['hello', 'world', 'JavaScript']));
console.log(getWordsLength(['', 'a', 'ab']));

/*Задание №13*/

function getNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}

console.log(getNegativeNumbers([-1, 2, -3, 4, -5]));
console.log(getNegativeNumbers([1, 2, 3]));
console.log(getNegativeNumbers([]));

/*Задание №14*/

// 1. Генерируем массив из 10 случайных целых чисел от 0 до 10
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    // Math.random() даёт [0, 1), умножаем на 11 → [0, 11), округляем вниз → целые 0..10
    randomNumbers.push(Math.floor(Math.random() * 11));
}

// 2. Отбираем чётные числа
const evenNumbers = randomNumbers.filter(num => num % 2 === 0);

// 3. Выводим оба массива
console.log('Исходный массив:', randomNumbers);
console.log('Массив с чётными числами:', evenNumbers);


/*Задание №15*/
// 1. Создаём массив из 6 случайных целых чисел от 1 до 10 включительно
numbers = [];
for (let i = 0; i < 6; i++) {
    // Math.random() * 10 даёт [0, 10) — от 0 до 9.999...
    // Math.floor округляет вниз, получаем целые 0..9
    // Прибавляем 1 → диапазон 1..10
    numbers.push(Math.floor(Math.random() * 10) + 1);
}
const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
console.log('Массив:', numbers);
console.log('Среднее арифметическое:', average);