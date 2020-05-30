// 6. Создайте input(color) и button - при нажатии на кнопку окрашивайте div выбранным цветом.

const button6 = document.querySelector('.button-task6');
let div6 = document.querySelector('.result-task6');

button6.onclick = () => {
        const color = document.querySelector('.input-task6').value;
        div6.style.backgroundColor = color
}
