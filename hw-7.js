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
        let input = prompt('Введите число от 1 до 100, для выхода введите -1111:');
        let num = Number(input);

        if (num === number) {
            alert('Правильно, ты угдал!!')
            idguess = true
        }

        else if (num === -1111) {
            alert('До новых встреч!!!')
            idguess = true
        }

        else if (num < number) {
            alert('Зададанное число больше')
        }
        else if (num > number) {
            alert('Зададанное число меньше')
        }


    }

}

function simpleArithmetic() {
    let Idprocess = Math.floor(Math.random() * 4) + 1; // Генерируем число от 1 до 4 случайное
    let firstNumber = Math.floor(Math.random() * 20) + 1; // Генерируем число от 1 до 20 случайное
    let secondNumber = Math.floor(Math.random() * 20) + 1; // Генерируем число от 1 до 20 случайное

    if (Idprocess === 1) {
        let userAnswer = Number(prompt(`${firstNumber} + ${secondNumber} =`));
        let Answer = firstNumber + secondNumber
        if (userAnswer === Answer) {
            alert('Правильно')
        }
        else {
            alert(`Не правильно, правильный ответ ${Answer}`)
        }

    }
    else if (Idprocess === 2) {
        let userAnswer = Number(prompt(`${firstNumber} - ${secondNumber} =`));
        let Answer = firstNumber - secondNumber
        if (userAnswer === Answer) {
            alert('Правильно')
        }
        else {
            alert(`Не правильно, правильный ответ ${Answer}`)
        }
    }

    else if (Idprocess === 3) {
        let userAnswer = Number(prompt(`${firstNumber} * ${secondNumber} =`));
        let Answer = firstNumber * secondNumber
        if (userAnswer === Answer) {
            alert('Правильно')
        }
        else {
            alert(`Не правильно, правильный ответ ${Answer}`)
        }
    }

    else if (Idprocess === 4) {
        // Для деления secondNumber может быть 0, чтобы сработала проверка
        secondNumber = Math.floor(Math.random() * 21); // 0-20
        let userAnswer = prompt(`${firstNumber} / ${secondNumber} =`); // не Number, чтобы принять "бесконечность"
        let Answer;

        if (secondNumber === 0) {
            Answer = "бесконечность";
        } else {
            Answer = firstNumber / secondNumber;
            userAnswer = Number(userAnswer); // если не 0, то преобразуем в число
        }

        if (userAnswer === Answer) {
            alert('Правильно');
        } else {
            alert(`Не правильно, правильный ответ ${Answer}`);
        }
    }
}

function gameReverseText() {
    let input = prompt('Введите текст:');
    alert(`Перевернутый текст: ${input.split('').reverse().join('')}`);

}

/*Задание №1*/
let simpleText = "ПроТивоЯдие12"
console.log(simpleText.toLowerCase())

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

/*Задание №4*/

let numberArr = [52, 53, 49, 77, 21, 32]
let sortArr = numberArr.sort((a, b) => a - b)

console.log('Первый (мин):', sortArr[0]);
console.log('Последний (макс):', sortArr[sortArr.length - 1]);

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
