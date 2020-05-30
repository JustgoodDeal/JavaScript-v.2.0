// 3. Создайте input(hidden) и button - при нажатии на кнопку выводите value из input.

const input3 = document.querySelector('.input-task3');
const button_3 = document.querySelector('.button-task3');
let div3 = document.querySelector('.result-task3');

button_3.onclick = () => {
        div3.innerHTML = input3.value;
}