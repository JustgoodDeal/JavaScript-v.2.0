// 1. Создайте на странице input[type=number], куда пользователь может ввести число.
// Есть кнопка, которая запускает функцию, которая должна вывести слово Even если число четное и Odd если нечетное.

const button2 = document.querySelector('.button-task2');
const input2 = document.querySelector('.input-task2');
let div2 = document.querySelector('.result-task2');

button2.onclick = () => {
    let num = +input2.value;
    if (num % 2 == 0) {
        div2.innerHTML = "Even";
    }
    else {
        div2.innerHTML = "Odd";
    }
}
