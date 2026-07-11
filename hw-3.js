/* Задание №1 */
let password = "пароль"

let userInput = prompt("Введите пароль");

if (password === userInput) {

    alert("Пароль введен верно");

} else {

    alert("Пароль введен неправильно");
}

/* Задание №2 */
let c = -3;

if (c > 0 && c < 10) {

    alert("верно");

} else {

    alert("Неверно");

}

/* Задание №3 */

let d = 2;

let e = 102;

if (d > 100 || e > 100) {

    alert("верно");

} else {

    alert("Неверно");

}

/* Задание №4 */

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

/* Задание №5 */

var monthNumber = Number(prompt("Введите номер месяца"));

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        alert('зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('осень');
        break;
    default:
        alert('ввели что-то не то');
}
