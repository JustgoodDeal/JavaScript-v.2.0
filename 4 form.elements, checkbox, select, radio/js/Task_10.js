// 10. Создайте форму. В ней input(text), input(number), input(password) и button.
// По нажатию кнопки выводите значение text, number и password через пробел

const form10 = document.querySelector('.form-task10');
const button10 = document.querySelector('.button-task10');
const input1_task10 = form10.elements["input1-task10"]; // так как в id есть дефис, через точку после elements нельзя
const input2_task10 = form10.elements.input2task10; // дефиса нет, поэтому можно и через точку после elements
const input3_task10 = form10.elements.pass; // если указан атрибут name, можно достучаться через его значение
let div10 = document.querySelector('.result-task10');

button10.onclick = (event) => {
        event.preventDefault();
        div10.innerHTML = input1_task10.value + ' ' + input2_task10.value + ' ' + input3_task10.value
}
