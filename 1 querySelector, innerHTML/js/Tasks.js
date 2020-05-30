// 1. Создайте на странице div с id=one. Запишите в данный элемент результат умножения 12 на 12.
// 2. Создайте следующую верстку на странице: <h2> We <span> IS </span></h2> Замените текст IS на ARE.
// 3. Создайте пустой div c классом three. Запишите внутрь div заголовок h3 с любым текстом.
// 4. Создайте пустой div c классом four. С помощью querySelector запишите внутрь div заголовок h4
// с произвольным текстом и параграф p с произвольным текстом.
// 5. Создайте две переменные z1 = 6, z2 = 3. Создайте div и выведите в него результат их умножения.
// 6. Создайте div и выведите в него результат  z1 на z2.
// 7.  Создайте div и выведите в него результат сложения x1='Hello', x2 = 5.

document.getElementById('one').innerHTML = 12 * 12;
document.querySelector('span').innerHTML = 3.1415;
document.querySelector('.three').innerHTML = '<h1 style="color: red">Red</h1>';

let four = document.querySelector('.four');
four.innerHTML = '<h4>Sha</h4>';
four.innerHTML += '<p>Pa</p>';

let z1 = 6;
let z2 = 3;
document.querySelector('.five').innerHTML = z1 * z2;
document.querySelector('.six').innerHTML = z1 / z2;

let x1 = 'Hello';
let x2 = 5;
document.querySelector('.seven').innerHTML = x1 + x2;
