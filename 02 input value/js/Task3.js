// 3.	Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки
// выполняется функция, которая выводит в консоль строку 'Hello имя фамилия',
// где имя - имя пользователя и фамилия - введенная фамилия.

let input1_task3 = document.querySelector('.input1-task3');
let input2_task3 = document.querySelector('.input2-task3');
let button3 = document.querySelector('.button-task3');

button3.onclick = function () {

    let name = input1_task3.value;
    let surname = input2_task3.value;
    console.log('Hello ' + name + ' ' + surname);

}