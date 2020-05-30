// 2. Создайте input(checkbox) и button - при нажатии на кнопку выводите true и checkbox value,
// если checkbox выбран и false если не выбран.

const checkbox_2 = document.querySelector('#checkbox-task2');
const button_2 = document.querySelector('.button-task2');
let div2 = document.querySelector('.result-task2');

button_2.onclick = () => {
    let checkbox_result = checkbox_2.checked;
    if (checkbox_result) {
        div2.innerHTML = checkbox_result + ' ' + checkbox_2.value;
    }
    else {
        div2.innerHTML = checkbox_result;
    }
}