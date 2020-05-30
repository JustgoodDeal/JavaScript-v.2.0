// 2.	Создайте input type=number и кнопку. По нажатию на кнопку выполняется функция, которая выводит
// на страницу число, которое ввел пользователь и к нему добавленное число 10.

let input2 = document.querySelector('.input-task2');
let button2 = document.querySelector('.button-task2');
let div2 = document.querySelector('.plus10-task2');

button2.onclick = function () {

    let input_value = +input2.value; // + переводит строку в число
    div2.innerHTML = input_value + 10;

}