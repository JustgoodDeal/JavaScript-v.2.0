
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').innerHTML = 'touch'
}

document.querySelector('.div-1').addEventListener('touchstart', t1)

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let event_count = 1

document.querySelector('.div-2').addEventListener('touchstart', event => {
    document.querySelector('.out-2').innerHTML = event_count
    event_count++
})


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3_1() {
    document.querySelector('.out-3').innerHTML = 1
}

function t3_2() {
    document.querySelector('.out-3').innerHTML = 2
}

document.querySelector('.div-3_1').addEventListener('touchstart', t3_1)
document.querySelector('.div-3_2').ontouchstart = t3_2

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function out_4_touch() {
    document.querySelector('.out-4').innerHTML = 'touch'
}

function t4() {
    document.querySelector('.div-4').addEventListener('touchstart', out_4_touch)
}

document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    document.querySelector('.div-4').removeEventListener('touchstart', out_4_touch);
}

document.querySelector('.b-5').addEventListener('click', t5)


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    div7.style.backgroundColor = 'red'
}

let div7 = document.querySelector('.div-7')
div7.addEventListener('touchend', t7)


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let w = 75;

function t10() {
    w++
    div10.style.width = w + 'px'
}

let div10 = document.querySelector('.div-10')
div10.addEventListener('touchmove', t10)
