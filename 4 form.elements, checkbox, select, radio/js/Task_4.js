// 4. Создайте div и кнопку. При нажатии кнопки создавайте внутри div элемент input и кнопку.
// Добавьте на созданную кнопку событие клик и запуск функции, которая должна выводить value созданного input.

const creation_button = document.querySelector('.create-inputButton');
let divInputButton = document.querySelector('.inputButton');
let div4 = document.querySelector('.result-task4');

creation_button.onclick = () => {
        div4.innerHTML = ''
        divInputButton.innerHTML = '<input type="text" class="created-input"><button class="created-button">Push</button>';
        let created_input = document.querySelector('.created-input');
        let created_button = document.querySelector('.created-button');
        created_button.onclick = () => {
                div4.innerHTML = created_input.value
        }
}
