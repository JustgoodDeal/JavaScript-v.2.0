
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
    document.querySelector('.out-1').textContent = event.key
}

let i_1 = document.querySelector('.i-1')
i_1.onkeyup = t1

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2() {
    document.querySelector('.out-2').textContent = event.code
}

let i_2 = document.querySelector('.i-2')
i_2.onkeyup = t2

// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

function t3() {
    let out = ''
    if (event.code.startsWith('Key')) {
        out = true;
    } else if (event.code.startsWith('Digit')) {
        out = false;
    }
    document.querySelector('.out-3').textContent = out
}

let i_3 = document.querySelector('.i-3')
i_3.onkeyup = t3


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
    document.querySelector('.out-4').textContent = i_4.value.toLowerCase()
}

let i_4 = document.querySelector('.i-4')
i_4.onkeyup = t4

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
    document.querySelector('.out-5').textContent = i_5.value.toUpperCase()
}

let i_5 = document.querySelector('.i-5')
i_5.onkeyup = t5


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let pressed = 0

function t9() {
    if (event.code === 'ArrowDown') {
        pressed++
    }
    document.querySelector('.out-9').textContent = pressed
}

let i_9 = document.querySelector('.i-9')
i_9.onkeyup = t9


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиши стрелка вправо
                увеличивать ширину изображения, стрелка влево - уменьшать ширину. Клавиша стрелка вверх - увеличивать
                высоту изображения, стрелка вниз - уменьшать высоту. Одно нажатие клавиши - 1px. */

function t10() {
    let height = +div_10.style.height.replace('px', '');
    let width = +div_10.style.width.replace('px', '');
    if (event.code === 'ArrowDown') {
        if (!height) {
           height = +div_10.offsetHeight
        }
        div_10.style.height = `${height - 1}px`
    }
    else if (event.code === 'ArrowUp') {
        if (!height) {
            height = +div_10.offsetHeight
        }
        div_10.style.height = `${height + 1}px`
    }
    else if (event.code === 'ArrowLeft') {
        if (!width) {
            width = +div_10.offsetWidth
        }
        div_10.style.width = `${width - 1}px`
    }
    else if (event.code === 'ArrowRight') {
        if (!width) {
            width = +div_10.offsetWidth
        }
        div_10.style.width = `${width + 1}px`
    }
}

let i_10 = document.querySelector('.i-10');
let div_10 = document.querySelector('.div-10');
div_10.querySelector('img').style.height ='100%';
div_10.querySelector('img').style.width ='100%';
i_10.onkeyup = t10;
