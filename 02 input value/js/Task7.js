// 7.	Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая
// запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t =
// parseInt(t), t2 = parseFloat(t)  и результат операции выведите в консоль. По очереди вводить 44, 44aaa, 44.95, a45

let input_task7 = document.querySelector('.input-task7');
let button7 = document.querySelector('.button-task7');

button7.onclick = function () {

    let int = parseInt(input_task7.value); // 44aaa - 44, 44.95 - 44, a45 - NaN;
    let float = parseFloat(input_task7.value); // 44aaa - 44, 44.95 - 44.95, a45 - NaN;
    console.log(int);
    console.log(float);

}