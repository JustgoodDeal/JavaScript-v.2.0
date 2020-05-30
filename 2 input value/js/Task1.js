// 1.	Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,
//     что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

let input = document.querySelector('.input-task1');
let button = document.querySelector('.button-task1');
let div = document.querySelector('.inputVal-task1');

button.onclick = function () {

    let input_value = input.value;
    div.innerHTML = input_value;
    input.value = '';

}