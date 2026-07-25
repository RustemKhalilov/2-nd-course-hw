document.getElementById('goButton').addEventListener('click', () => {
    document.getElementById('Game1').scrollIntoView({ behavior: 'smooth' });
});

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

function guessNumber() {
    let number = Math.floor(Math.random() * 100)
    let idguess = false

    while (idguess === false) {
        let input = prompt('Введите число от 1 до 100 (для выхода нажмите Отмена):');
        let num = Number(input);

        if (input === null) {
            // Нажата «Отмена» (или Esc)
            console.log('Отмена');
            idguess = true
        } else if (input.trim() === '') {
            // Нажат «ОК» при пустом поле (или введены только пробелы)
            alert('Ответ не был введен!!!');
            idguess = true

        } else if (isNaN(num)) {
            // Не удалось преобразовать в число → текстовый ввод
            alert('Введён текст, а не число попробуйте снова');

        } else if (num < 1 || num > 100) {
            // Это число, дальше можно проверять диапазон
            console.log('Введено число:', num);
            alert('Число вне диапазона 1–100 попробуйте еще раз');

        } else if (num === number) {
            alert('Правильно, ты угдал!!')
            idguess = true

        } else if (num < number) {
            alert('Зададанное число больше')
        }
        else if (num > number) {
            alert('Зададанное число меньше')
        }

    }

}

function simpleArithmetic() {
    let Idprocess = Math.floor(Math.random() * 4) + 1;   // 1-4
    let firstNumber = Math.floor(Math.random() * 20) + 1; // 1-20
    let secondNumber;

    // Для деления генерируем второй операнд иначе (допускаем 0)
    if (Idprocess === 4) {
        secondNumber = Math.floor(Math.random() * 21);    // 0-20
    } else {
        secondNumber = Math.floor(Math.random() * 20) + 1; // 1-20
    }

    // Знак операции и правильный ответ определим заранее
    let operator, correctAnswer;
    switch (Idprocess) {
        case 1:
            operator = '+';
            correctAnswer = firstNumber + secondNumber;
            break;
        case 2:
            operator = '-';
            correctAnswer = firstNumber - secondNumber;
            break;
        case 3:
            operator = '*';
            correctAnswer = firstNumber * secondNumber;
            break;
        case 4:
            operator = '/';
            // Для деления корректный ответ – число или строка "бесконечность"
            correctAnswer = secondNumber === 0 ? 'бесконечность' : firstNumber / secondNumber;
            break;
    }

    // Запрашиваем ответ как строку, не преобразуя сразу
    const userInput = prompt(`${firstNumber} ${operator} ${secondNumber} =`);

    // 1. Отмена
    if (userInput === null) {
        console.log('Отмена');
        return;
    }

    // 2. Пустой ввод (только пробелы)
    if (userInput.trim() === '') {
        alert('Ответ не был введен!!!');
        return;
    }

    // 3. Преобразуем в число (кроме случая деления на 0, где ждём строку)
    let userAnswer;
    if (Idprocess === 4 && secondNumber === 0) {
        // Ожидаем строку "бесконечность"
        userAnswer = userInput.trim();
    } else {
        userAnswer = Number(userInput);
        // Дополнительно: если пользователь ввёл не число, Number даст NaN
        if (isNaN(userAnswer)) {
            alert('Введите число!');
            return;
        }
    }

    // 4. Сравнение с учётом особенностей деления
    let isCorrect = false;

    if (Idprocess === 4) {
        // Деление
        if (secondNumber === 0) {
            // Сравниваем строки без учёта регистра и лишних пробелов
            isCorrect = userAnswer.toLowerCase() === 'бесконечность';
        } else {
            // Сравнение дробных чисел с небольшой погрешностью
            isCorrect = Math.abs(userAnswer - correctAnswer) < 0.0001;
        }
    } else {
        // Сложение, вычитание, умножение – точное сравнение целых чисел
        isCorrect = userAnswer === correctAnswer;
    }

    // 5. Вывод результата
    if (isCorrect) {
        alert('Правильно');
    } else {
        alert(`Не правильно, правильный ответ ${correctAnswer}`);
    }
}

function gameReverseText() {
    let input = prompt('Введите текст (для выхода нажмите Отмена):');
    if (input === null) {
        // Нажата «Отмена» (или Esc)
        console.log('Отмена');
        return;

    } else if (input.trim() === '') {
        // Нажат «ОК» при пустом поле (или введены только пробелы)
        alert('Ответ не был введен!!!');
        return;

    } else {
        alert(`Перевернутый текст: ${input.split('').reverse().join('')}`);
    }
}

/*Задание №1*/
let simpleText = "ПроТивоЯдие12"
console.log(simpleText.toUpperCase())

/*Задание №2*/
const words = ['Apple', 'application', 'Banana', 'apricot', 'Avocado', 'grape'];
const search = 'ap';

function filterByPrefix(stringsArray, prefix) {
    const lowerPrefix = prefix.toLowerCase(); // <-- toLowerCase() для префикса

    return stringsArray.filter(item =>
        item.toLowerCase().startsWith(lowerPrefix) // toLowerCase() + startsWith()
    );
}

const result = filterByPrefix(words, search);
console.log(result);

/*Задание №3*/

let number = 32.58884
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

/*Задание №4*/

let numberArr = [52, 53, 49, 77, 21, 32]
/*  let sortArr = numberArr.sort((a, b) => a - b) */

console.log('Минимальное значение:', Math.min(...numberArr));
console.log('Максимально значение:', Math.max(...numberArr));

/*Задание №5*/

console.log(Math.floor(Math.random() * 10) + 1);

/*Задание №6*/

function generateRandomNumbers(n) {
    // Если число меньше 0, возвращаем пустой массив
    if (n < 0) return [];

    const length = Math.floor(n / 2); // половина от n, целое число
    const result = [];

    for (let i = 0; i < length; i++) {
        // Случайное целое от 0 до n включительно
        result.push(Math.floor(Math.random() * (n + 1)));
    }

    return result;

}

console.log(generateRandomNumbers(10));

console.log(generateRandomNumbers(7));

console.log(generateRandomNumbers(0));

/*Задание №7*/

function getRandomInRange(a, b) {
    // Приводим к целым числам на случай, если переданы не целые
    const min = Math.ceil(Math.min(a, b));
    const max = Math.floor(Math.max(a, b));

    // Формула для случайного целого от min до max включительно
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(1, 10));   // случайное целое от 1 до 10
console.log(getRandomInRange(-5, 5));   // от -5 до 5
console.log(getRandomInRange(7, 3));    // порядок не важен, всё равно от 3 до 7

/*Задание №8*/

let currentDate = new Date();
console.log(currentDate);

/*Задание №9*/

// Создаем копию, чтобы не менять исходную
let futureDate = new Date(currentDate);
futureDate.setDate(futureDate.getDate() + 73);

console.log('Текущая дата:', currentDate);
console.log('Дата через 73 дня:', futureDate);

/*Задание №10*/

function formatDateRussian(date) {
    // Проверяем, что передан корректный объект Date
    if (!(date instanceof Date) || isNaN(date)) {
        return 'Некорректная дата';
    }

    // Число, год и время с ведущими нулями
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Массивы с названиями на русском
    const months = [
        'январь', 'февраль', 'март', 'апрель', 'май', 'июнь',
        'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
    ];
    const weekdays = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];

    // Получаем месяц и день недели по индексам (getMonth() 0-11, getDay() 0-6)
    const month = months[date.getMonth()];
    const weekday = weekdays[date.getDay()];

    // Формируем и возвращаем итоговую строку
    return `Дата: ${day} ${month} ${year} — это ${weekday}. Время: ${hours}:${minutes}:${seconds}`;
}

const now = new Date();
console.log(formatDateRussian(now));

const someDate = new Date(2026, 6, 25, 14, 5, 3); // 25 июля 2026, 14:05:03
console.log(formatDateRussian(someDate));
