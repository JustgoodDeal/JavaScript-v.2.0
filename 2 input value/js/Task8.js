// 8.	Создайте два input type=number, куда пользователь может ввести отрицательные числа.
//     Выведите на страницу сумму данных чисел. Изучите влияние перевода отрицательных чисел с помощью + и parseInt.

let input1_task8 = document.querySelector('.input1-task8');
let input2_task8 = document.querySelector('.input2-task8');
let button8 = document.querySelector('.button-task8');
let div8_plus = document.querySelector('.sum-plus-task8');
let div8_parseInt = document.querySelector('.sum-parseInt-task8');

button8.onclick = function () {

    let first_number = input1_task8.value;
    let second_number = input2_task8.value;
    div8_plus.innerHTML = +first_number + +second_number;
    div8_parseInt.innerHTML = parseInt(first_number) + parseInt(second_number);

}