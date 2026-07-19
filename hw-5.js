document.getElementById('goButton').addEventListener('click', () => {
    document.getElementById('Game1').scrollIntoView({ behavior: 'smooth' });
});

/*Задание №1*/
function findMax(a, b) {
    let maxNumber = a;
    if (b < a) {
        maxNumber = b
    }
    return maxNumber
}


/*Задание №2*/
function getEvenNumber(a) {
    if (a % 2 == 0) {
        return 'Число четное';
    }
    else {
        return 'Число нечетное';
    }
}

/*Задание №3*/
function getSquareNumber(a) {
    return a * a
}

/*Задание №4*/

function getUserYear() {
    let userYear = prompt("Сколько вам лет");

    if (userYear < 0) {
        return 'Вы ввели неправильное число';
    }
    else if (userYear >= 0 && userYear <= 12) {
        return 'Привет друг';
    }
    else {
        return 'Добро пожаловать';
    }
}



/*Задание №5*/

function multiplyNumbers(a, b) {
    // Преобразуем оба аргумента к числовому типу
    const numA = Number(a);
    const numB = Number(b);

    // Проверяем, не является ли результат преобразования NaN
    if (isNaN(numA) || isNaN(numB)) {
        return 'Одно или оба значения не являются числом';
    }

    // Если оба — корректные числа, возвращаем их произведение
    return numA * numB;
}

/*Задание №6*/

function cubeNumber() {
    let input = prompt('Введите число:');
    let num = Number(input);
    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    } else {
        let cube = Math.pow(num, 3)
        return `${num} в кубе равняется ${cube}`;
    }
}

/*Задание №7*/

function createCircle(radius) {
    return {
        radius,
        getArea() {
            return Math.PI * this.radius * this.radius;
        },
        getPerimeter() {
            return 2 * Math.PI * this.radius;
        }
    };
}





/*Блок вызова функций*/
console.log(findMax(8, 4))
console.log(findMax(6, 6))

console.log(getEvenNumber(3))
console.log(getEvenNumber(44))

console.log(getSquareNumber(3))

console.log(getUserYear()) /* -3 */
console.log(getUserYear()) /* 8 */
console.log(getUserYear()) /* 15 */

console.log(multiplyNumbers(3, 23))
console.log(multiplyNumbers('Хм', 23))
console.log(multiplyNumbers(3, 'Да ладно'))
console.log(multiplyNumbers('Хм', 'Да ладно'))

console.log(cubeNumber()) /*'6' */
console.log(cubeNumber()) /*'Хм' */

const circle1 = createCircle(5);
const circle2 = createCircle(10);

console.log(`Параметры окружности 1 Радиус = ${circle1.radius} Длина окружности = ${circle1.getPerimeter()} Площадь = ${circle1.getArea()}`);
console.log(`Параметры окружности 2 Радиус = ${circle2.radius} Длина окружности = ${circle2.getPerimeter()} Площадь = ${circle2.getArea()}`);

