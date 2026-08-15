const element = document.querySelector('.h1');
// Получаем элементы по тегу (первый h1 и первую кнопку на странице)
const header = document.querySelector('h1');
const button = document.querySelector('#hideBtn');

button.addEventListener('click', function () {
    if (header.style.display === 'none') {
        header.style.display = 'block';
        button.textContent = 'Скрыть';
    } else {
        header.style.display = 'none';
        button.textContent = 'Показать';
    }
});

// Получаем элементы через querySelector
const paragraph = document.querySelector('p');
const button1 = document.querySelector('#colorBtn');

// Добавляем обработчик клика
button1.addEventListener('click', function () {
    // Устанавливаем синий цвет текста
    paragraph.style.color = 'blue';
});

// Получаем элементы по id через querySelector
const header3 = document.querySelector('#dynamicHeader');
const changeButton = document.querySelector('#changeTextBtn');

// Добавляем обработчик клика
changeButton.addEventListener('click', function () {
    // Меняем текст заголовка
    header3.textContent = 'Привет, мир!';
});

// Задание 4: находим все элементы с классом 'description' и меняем их текст
const descriptionElements = document.querySelectorAll('.description');

descriptionElements.forEach(function (element) {
    element.textContent = 'Измененный текст';
});

// Задание 5
// Находим все элементы с классом 'description'
const descriptionParagraphs = document.querySelectorAll('.description');

// Перебираем найденные элементы и меняем их текст
descriptionParagraphs.forEach(function (element) {
    element.textContent = 'Новый текст';
});

// Задание №6
// Находим кнопку по id
const addButton = document.querySelector('#addParagraphBtn');

// Добавляем обработчик клика
addButton.addEventListener('click', function () {
    // Создаём новый элемент <p>
    const newParagraph = document.createElement('p');
    // Задаём ему текстовое содержимое
    newParagraph.textContent = 'Новый абзац';
    // Добавляем созданный элемент в конец документа (в body)
    document.body.appendChild(newParagraph);
});


// Задание №7
// Находим кнопку по id
const removeButton = document.querySelector('#removeBtn');

// Добавляем обработчик клика
removeButton.addEventListener('click', function () {
    // Находим первый элемент с классом 'description'
    const firstDescription = document.querySelector('.description');

    // Если такой элемент существует, удаляем его
    if (firstDescription) {
        firstDescription.remove();
    }
});