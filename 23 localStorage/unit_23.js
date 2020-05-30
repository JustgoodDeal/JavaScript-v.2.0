
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
    localStorage.setItem(5, 11)
}

document.querySelector('.b-1').addEventListener('click', t1)

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */

let a2 = [7,6,5]

function t2() {
    localStorage.setItem('a2', JSON.stringify(a2))
}

document.querySelector('.b-2').addEventListener('click', t2)


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
    let key = 'a2'
    let a2_str = localStorage.getItem(key);
    let a2_parsed = JSON.parse(a2_str)
    document.querySelector('.out-3').innerHTML = `${key}: ${a2_parsed}`
}

document.querySelector('.b-3').addEventListener('click', t3)


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

let a4 = {hello: 'world', hi: 'mahai'};

function t4() {
    localStorage.setItem('a4', JSON.stringify(a4))
}

document.querySelector('.b-4').addEventListener('click', t4)

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

function t5() {
    let key = 'a4'
    let a4_str = localStorage.getItem(key);
    let a4_parsed = JSON.parse(a4_str);
    let out = '';
    for (let key in a4_parsed) {
        out += `${key}: ${a4_parsed[key]}<br>`
    }
    document.querySelector('.out-5').innerHTML = out
}

document.querySelector('.b-5').addEventListener('click', t5)

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {

}

document.querySelector('.b-6').addEventListener('click', () => {localStorage.clear()})


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

function t7() {
    let input_value = document.querySelector('.i-7').value
    if (input_value) {
        let a7_str = localStorage.getItem('a7');
        let a7_parsed = [];
        if (a7_str) {
            a7_parsed = JSON.parse(a7_str);
        }
        a7_parsed.push(input_value);
        localStorage.setItem('a7', JSON.stringify(a7_parsed))
    }
}

document.querySelector('.b-7').addEventListener('click', t7)

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    let a7_str = localStorage.getItem('a7');
    if (a7_str) {
        let a7_parsed = JSON.parse(a7_str);
        a7_parsed.pop();
        localStorage.setItem('a7', JSON.stringify(a7_parsed))
    }
}

document.querySelector('.b-8').addEventListener('click', t8)


