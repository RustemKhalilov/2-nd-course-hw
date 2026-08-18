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
    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        const userAnswer = prompt(`Вопрос № ${i + 1}: ${question.question}\n\n${question.options.join('\n')}`);
        if (userAnswer === null) continue; // Отмена / Esc — пропускаем вопрос
        const answer = userAnswer.trim().toLowerCase();
        const correctOption = question.options[question.correctAnswer - 1]; // например "2. Синий"
        const correctParts = correctOption.split('. ');
        const correctNumber = correctParts[0];           // "2"
        const correctName = correctParts[1] ? correctParts[1].toLowerCase() : ''; // "синий"
        if (answer === correctNumber || answer === correctName || answer === correctOption.toLowerCase()) {
            userCorrectAnswerCount++;
        }
    }
    alert(`Правильных ответов: ${userCorrectAnswerCount} из ${quiz.length}`);
}

/*Игра Угадай число*/
function guessNumber() {
    let number = Math.floor(Math.random() * 100) + 1; // диапазон 1-100
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
            alert('Правильно, ты угадал!!')
            idguess = true

        } else if (num < number) {
            alert('Загаданное число больше')
        }
        else if (num > number) {
            alert('Загаданное число меньше')
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

/*Игра Генератор случайных цветов*/
function randomColorBackground() {
    // Тёмные оттенки, чтобы белый текст на странице оставался читаемым
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);
    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    // Меняем фон секции с играми на случайный цвет
    document.querySelector('.Gamebox').style.backgroundColor = randomColor;
}


