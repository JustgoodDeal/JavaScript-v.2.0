// 7. Создайте input(color) и input(color) - два элемента и button - при нажатии на кнопку присвойте
// цвет из первого input в value второго

const button7 = document.querySelector('.button-task7');

button7.onclick = () => {
        const color = document.querySelector('.input1-task7').value;
        document.querySelector('.input2-task7').value = color;
}
