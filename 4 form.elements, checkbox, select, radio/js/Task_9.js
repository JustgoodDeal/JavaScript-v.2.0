// 9. Создайте select и button - при нажатии на кнопку выводите value выбранного option в input.

const select9 = document.querySelector('.select-task9');
const button9 = document.querySelector('.button-task9');
let result9 = document.querySelector('.result-task9');

button9.onclick = () => {
        result9.value = select9.value;
}
