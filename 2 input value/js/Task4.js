// 4.	Создайте два input и кнопку. В input пользователь вводит числа.
//     При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.

let input1_task4 = document.querySelector('.input1-task4');
let input2_task4 = document.querySelector('.input2-task4');
let button4 = document.querySelector('.button-task4');
let div4 = document.querySelector('.sum-task4');

button4.onclick = function () {

    let first_number = +input1_task4.value;
    let second_number = +input2_task4.value;
    div4.innerHTML = first_number + second_number;

}