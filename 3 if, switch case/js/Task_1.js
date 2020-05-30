// 1. Создайте на странице input[type=number], куда пользователь может ввести число.
// Есть кнопка, которая запускает функцию, которая должна вывести "Меньше 0", если число
// меньше нуля, "Равно 0", если число равно нулю и "Больше 1", если больше.

const button1 = document.querySelector('.button-task1');
const input1 = document.querySelector('.input-task1');
let div1 = document.querySelector('.result-task1');

button1.onclick = () => {
    let num = +input1.value;
    if (num < 0) {
        div1.innerHTML = "Меньше 0";
    }
    else if (num == 0) {
        div1.innerHTML = "Равно 0";
    }
    else if (num > 0) {
        div1.innerHTML = "Больше 1";
    }
}
