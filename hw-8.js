document.getElementById('goButton').addEventListener('click', () => {
    document.getElementById('Game1').scrollIntoView({ behavior: 'smooth' });
});

/*Игра Викторина*/
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

/*Игра Угадай число*/
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

/*Игра Простая арифметика*/
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

/*Игра Переверни текст*/
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


/*Игра Камень, ножницы, бумага*/
function gameRockScissorsPaper() {
    let input = prompt('Выберете камень ножницы или бумага (для выхода нажмите Отмена):');
    if (input === null) {
        // Нажата «Отмена» (или Esc)
        console.log('Отмена');
        return;

    } else if (input.trim() === '') {
        // Нажат «ОК» при пустом поле (или введены только пробелы)
        alert('Ответ не был введен!!!');
        return;
    } else {
        let arrAnswer = ["камень", "ножницы", "бумага"];
        let choosingСomputer = arrAnswer[Math.floor(Math.random() * 3)];
        let userAnswer = input.trim().toLowerCase() /* убрали пробелы привели к нижнему регистру */
        if (!arrAnswer.includes(userAnswer)) {
            // пользователь ввел НЕ валидное значение
            alert("Ошибка! Введите камень, ножницы или бумагу.");
            return
        }
        if (userAnswer === "камень") {
            if (userAnswer === choosingСomputer) {
                alert(`${choosingСomputer} Ничья`);
                return;
            } else if (choosingСomputer === "ножницы") {
                alert(`${choosingСomputer} Ты выиграл молодец!!!`);
                return;
            } else if (choosingСomputer === "бумага") {
                alert(`${choosingСomputer} Ты проиграл, не расстраивайся!!!`);
                return;
            }

        } else if (userAnswer === "ножницы") {
            if (userAnswer === choosingСomputer) {
                alert(`${choosingСomputer} Ничья`);
                return;
            } else if (choosingСomputer === "камень") {
                alert(`${choosingСomputer} Ты проиграл, не расстраивайся!!!`);
                return;
            } else if (choosingСomputer === "бумага") {
                alert(`${choosingСomputer} Ты выиграл молодец!!!`);
                return;
            }

        } else if (userAnswer === "бумага") {
            if (userAnswer === choosingСomputer) {
                alert(`${choosingСomputer} Ничья`);
                return;
            } else if (choosingСomputer === "камень") {
                alert(`${choosingСomputer} Ты выиграл молодец!!!`);
                return;
            } else if (choosingСomputer === "ножницы") {
                alert(`${choosingСomputer} Ты проиграл, не расстраивайся!!!`);
                return;
            }

        }



    }

}

/*Задание №1*/
let people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((item1, item2) => item1.age - item2.age));

/*Задание №2*/

function isPositive(number) {
    // писать код тут
    return number > 0;
}
function isMale(person) {
    // писать код тут
    return person.gender === 'male';
}
function filter(array, ruleFunction) {
    // писать код тут
    const result = [];               // массив для отфильтрованных элементов
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) {  // если правило выполняется
            result.push(array[i]);       // добавляем элемент в результат
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

/*Задание №3*/

let count = 0;
const intervalId = setInterval(() => {
    const now = new Date();
    console.log(now.toString()); // или любой формат
    count++;
    if (count === 10) {
        clearInterval(intervalId); // очищаем заданый setInterval по 3000 мс
        console.log('30 секунд прошло');
    }
}, 3000);



/*Задание №4*/

function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    setTimeout(callback, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

/*Задание №5*/

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));


