// Дан select, который содержит 5 значений: 1, 2, 3, 100, 500. При нажатии на кнопку функция должна получить выбранное
// в select число, потом с помощью switch case сравнить его поочередно с ‘1’, ‘2’, ‘3’.
// И если выбрано число 1, то вывести в "One", если 2 - "Two", если 3 - "Three", если 100 или 500 - "100/500".

const button3 = document.querySelector('.button-task3');
const select3 = document.querySelector('.select-task3');
let div3 = document.querySelector('.result-task3');

button3.onclick = () => {
    let val = select3.value;
    switch (val) {
        case '1':
            div3.innerHTML = "One";
            break;
        case '2':
            div3.innerHTML = "Two";
            break;
        case '3':
            div3.innerHTML = "Three";
            break;
        default:
            div3.innerHTML = "100/500";
    }
}
