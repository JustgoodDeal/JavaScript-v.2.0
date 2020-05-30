// 5. Создайте один input(radio) и button - при нажатии на button если radio выбран,
// выводите value либо 0, если не активен

const button5 = document.querySelector('.button-task5');
let div5 = document.querySelector('.result-task5');

button5.onclick = () => {
        const radio = document.querySelector('#radio1-task5');
        if (radio.checked) {
                div5.innerHTML = radio.value
        }
        else {
                div5.innerHTML = '0'
        }
}
