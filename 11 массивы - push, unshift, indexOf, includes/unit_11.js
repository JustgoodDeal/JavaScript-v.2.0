function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + ' ';
    }
    document.querySelector(domElem).innerHTML = out;
}

let d1 = [33, 'best', 66, 'best2'];

// Task 2
//Напишите функцию f2, которая применяет метод pop к массиву d1, а затем выводит его (showArr) в .out-2
// функция выполняется при нажатии кнопки b-2

function f2() {
    d1.pop()
    showArr('.out-2', d1);
}

document.querySelector('.b-2').onclick = f2;

// Task 3
// Напишите функцию f3, которая применяет метод shift к массиву d1, а затем выводит его (showArr) в .out-3
// функция выполняется при нажатии кнопки b-3

function f3() {
    d1.shift()
    showArr('.out-3', d1);
}

document.querySelector('.b-3').onclick = f3;

// Task 4
// Напишите функцию f4, которая применяет метод push к массиву d1, данные для массива берите из i-4, а затем выводит его (showArr) в .out-4
// функция выполняется при нажатии кнопки b-4


function f4() {
    d1 = document.querySelector('.i-4').value.split();
    d1.push('some')
    showArr('.out-4', d1);
}

document.querySelector('.b-4').onclick = f4;

// Task 5
// Напишите функцию f5, которая применяет метод unshift к массиву d1, данные для массива берите из i-5, а затем выводит его (showArr) в .out-5
// функция выполняется при нажатии кнопки b-5

function f5() {
    d1 = document.querySelector('.i-5').value.split();
    d1.unshift('some');
    showArr('.out-5', d1);
}

document.querySelector('.b-5').onclick = f5;

// Task 10
// Напишите функцию f10, которая применяет к массиву d10 метод reverse и выводит полученный массив в out-10.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

let d10 = [3, 14, 15, 92, 6];

function f10() {
    d10.reverse()
    showArr('.out-10', d10);
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// Напишите функцию, которая получает число из input i-11, переводит в число, и с помощью метода indexOf проверяет наличие в массиве d11. Функция выводит в out-11 -1 если такого числа нет в массиве, либо его индекс в массиве.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11

let d11 = [2, 3, 4, 5, 6, 7];

function f11() {
    let to_find = +document.querySelector('.i-11').value;
    document.querySelector('.out-11').textContent = d11.indexOf(to_find)
}

document.querySelector('.b-11').onclick = f11;


// Task 16
// Даны два массива d161 и d162 - используя метод concat - добавьте в массив d16 результат применения concat между массивом d161 и d162.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87, 9];

function f16() {
    d16 = d161.concat(d162)
    showArr('.out-16', d16);
}

document.querySelector('.b-16').onclick = f16;


// Task 18
// Напишите функцию f18, которая получает значение из i-18 и проверяет есть ли такое значение в массиве d18 c использованием метода include. Результат применения метода - выводится в .out-18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let d18 = ['b', 'c', '45', 'e', 'z', 'y'];

function f18() {
    let to_find = document.querySelector('.i-18').value;
    document.querySelector('.out-18').textContent = d18.includes(to_find)
}

document.querySelector('.b-18').onclick = f18;



// Task 20
// Напишите функцию f20, которая применяет к массиву d20 метод join с параметрами и соединяет элементы массива в одну строку. Результат выводит в .out-20. В качестве разделителя укажите два апострофа без пробела.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20

let d20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {
    document.querySelector('.out-20').textContent = d20.join('"')
}

document.querySelector('.b-20').onclick = f20;