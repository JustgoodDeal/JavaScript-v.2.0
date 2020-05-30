// Task 6
// Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра. 

function t6(a, b) {
    let min = Math.ceil(a);
    let max = Math.floor(b);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector('.b-6').onclick = function () {
    document.querySelector('.out-6').textContent = t6(1, 7);
}

// Task 8
// Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки.Т.е.принимает _hello_(где знак _ символизирует пробел), а возвращает hello.Для удаления пробелов - используйте trim.

function t8(str) {
    return str.trim()
}

document.querySelector('.b-8').onclick = () => {
    document.querySelector('.out-8').textContent = t8('  Hello  ');
}
