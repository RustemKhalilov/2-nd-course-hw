document.getElementById('goButton').addEventListener('click', () => {
    document.getElementById('Game1').scrollIntoView({ behavior: 'smooth' });
});

let a = 10;
alert(a);

let iPhoneFirst = 2007;
alert("Первый iPhone выпущен в " + iPhoneFirst + " году");

let JScreator = "Brendan";
alert("Создателя языка  JavaScript звали " + JScreator);

let a1 = 10;
let a2 = 2;
alert(`Сумма двух чисел равна = ${a1 + a2}`);
alert(`Разность двух чисел равна = ${a1 - a2}`);
alert(`Произведение двух чисел равна = ${a1 * a2}`);
alert(`Частное двух чисел равна = ${a1 / a2}`);



let result;
result = Math.pow(2, 5)
alert("2 в 5 степени равно = " + result);

a = 9;
let b = 2;
alert(`Остаток от деления 9 на 2 = ${a % b}`);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert("Результат = " + num);

let age = prompt("Сколько вам лет?");
alert("Вам " + age + " лет");

let user = {
    name: "Рустем",
    age: 45,
    isAdmin: true
};

let name = prompt("Как вас зовут?");
alert(`Привет, ${name}!`);