/*Задание №1*/

for (let i=0; i < 2; i++) {
    console.log("Привет");
}

/*Задание №2*/
for (let i=1; i <= 5; i++) {
    console.log(i);
}

/*Задание №3*/
for (let i=7; i <= 22; i++) {
    console.log(i);
}

/*Задание №4*/
let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let key in obj) {
   console.log(`${key} - ${obj[key]} долларов`);
}

/*Задание №5*/
let n = 1000;
let count = 0; // Счётчик делений, для наглядности

while (n >= 50) {
    n = n / 2;
    count++;
    console.log(`Итерация ${count}: n = ${n}`);
}

console.log(`\nИтоговый результат: ${n}`);
console.log(`Количество делений: ${count}`);

/*Задание №6*/
// Первая пятница месяца (число от 1 до 7)
let firstFriday = 5; // например, первая пятница — 5-е число
let daysInMonth = 31;

for (let day = firstFriday; day <= daysInMonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}