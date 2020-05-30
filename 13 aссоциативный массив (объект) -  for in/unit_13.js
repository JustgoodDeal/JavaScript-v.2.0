// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение сохраненное под ключем two из массива a1.

function f1() {
    let a1 = {
        "one": 15,
        "two": 16,
        "five": 20
    };
    document.querySelector('.out-1').innerHTML = a1['two'];
    // document.querySelector('.out-1').innerHTML = a1.two; //либо так
}

document.querySelector('.b-1').onclick = f1;


// Task 4
// Давайте напишем функцию f4, которая будет выводить массив a4 в out-4 при нажатии кнопки b-4. Формат вывода - ключ пробел значение перенос строки +' <br>'. Функция должна возвращать строку в указанном формате вывода.
// Обратите внимание на пробел перед br!!!!!!!!!


let a4 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};
function f4() {
    let out = '';
    for (let key in a4) {
        out += `${key} ${a4[key]}<br>`
    }
    return out;
}

document.querySelector('.b-4').onclick = () => {
    document.querySelector('.out-4').innerHTML = f4();
}


// Task 6
// Добавьте input .i-61 и i-62. При нажатии b-6 выполняете функцию f6. Функция должна получать из i-61 ключ, а из i-62 значение и добавлять его в массив a6. После этого, с помощью функции f5 выводите массив a6 в out-6.

let a6 = {
    "b": 17,
    "e": 22,
};

function f6() {
    let key = document.querySelector('.i-61').value;
    let value = document.querySelector('.i-62').value;
    a6[key] = value;
    let out = '';
    for (let key in a6) {
        out += `${key} ${a6[key]}<br>`
    }
    document.querySelector('.out-6').innerHTML = out;
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Добавьте input .i-7. При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 ключ. Если такой ключ есть в a7 то выводить 1 в out-7, если нет - 0.

let a7 = {
    "b": 17,
    "e": 22
};


function f7() {
    let key = document.querySelector('.i-7').value;
    let exist = 0;
    if (key in a7) {
        exist = 1;
    }
    document.querySelector('.out-7').innerHTML = exist;
}

document.querySelector('.b-7').onclick = f7;


// Task 10
// Давайте напишем полезную функцию f10, которая проверяет есть ли значение в ассоциативном массиве. Фукнция должна возвращать true если есть, и false если нет. Массив и значение передавать функции в качестве параметров.

function f10(arr, val) {
    for (let key in arr) {
        if (arr[key] === val) return true
    }
    return false;
}

document.querySelector('.b-10').onclick = () => {
    let a10 = {
        "k": 22,
        "d": 54,
        "m": 22,
    }
    document.querySelector('.out-10').innerHTML = f10(a10, 22);
};


// Task 11
// При нажатии b-11 выполняете функцию f11. Функция должна получить ключ из i-11 и удалить запись из массива a11 с таким ключем. После этого вывести массив в out-11.

let a11 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f11() {
    let key = document.querySelector('.i-11').value;
    delete a11[key];
    let out = '';
    for (let key in a11) {
        out += `${key} ${a11[key]}<br>`
    }
    document.querySelector('.out-11').innerHTML = out;
}

document.querySelector('.b-11').onclick = f11;


// Task 16
// При нажатии b-16 выполняете функцию f16. Функция должна в out-16 выводить элементы name вложенных массивов в a16. Вывод через пробел.

let a16 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f16() {
    let out = '';
    for (let key in a16) {
        out += a16[key]['name'] + ' '
    }
    document.querySelector('.out-16').innerHTML = out;
}

document.querySelector('.b-16').onclick = f16;



