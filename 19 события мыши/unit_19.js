
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    let content = document.querySelector('.div-1').textContent
    document.querySelector('.out-1').textContent = content
}

document.querySelector('.div-1').onclick = t1


// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(event) {
    let alt = event.altKey;
    document.querySelector('.out-2').textContent = alt;
    return alt
}

document.querySelector('.div-2').onclick = t2;

// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
    document.querySelector('.div-3').style.width = w3 + 'px';
    document.querySelector('.out-3').textContent = w3;
    w3 += 5;
}

document.querySelector('.div-3').onclick = t3;


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
    let content = document.querySelector('.div-4').textContent
    document.querySelector('.out-4').textContent = content
}

document.querySelector('.div-4').ondblclick = t4

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
    div5.classList.toggle('active')
}

let div5 = document.querySelector('.div-5')
div5.ondblclick = t5


// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8() {
    let checked = checkbox8.checked
    document.querySelector('body').oncontextmenu = () => {
        if (checked) return false
        else return true
    }
}

let checkbox8 = document.querySelector('.ch-8')
checkbox8.onchange = t8


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
    div9.querySelector('img').src="img/2.png"
}

let div9 = document.querySelector('.div-9')
div9.oncontextmenu = t9


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
    div10.querySelector('img').src="img/2.png"
}

let div10 = document.querySelector('.div-10')
div10.onmouseenter = t10

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11_1() {
    div11.querySelector('img').src="img/2.png"
}

function t11_2() {
    div11.querySelector('img').src="img/1.png"
}

let div11 = document.querySelector('.div-11')
div11.onmouseenter = t11_1
div11.onmouseleave = t11_2

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

function t12() {
    div12.classList.add('active')
}

let div12 = document.querySelector('.div-12')
div12.onmousedown = t12


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

function t13_1() {
    div13.classList.add('active')
}

function t13_2() {
    div13.classList.remove('active')
}

let div13 = document.querySelector('.div-13')
div13.onmousedown = t13_1
div13.onmouseup = t13_2


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

function t15() {
    let content = +div15.textContent
    div15.textContent = content + 1
}

let div15 = document.querySelector('.div-15')
div15.onmousemove = t15


// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 15. */

function t17On() {
    div15.onmousemove = t15
}
function t17Off() {
    div15.onmousemove = null
}

document.querySelector('.b-17_on').onclick = t17On
document.querySelector('.b-17_off').onclick = t17Off

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19() {
    div19.textContent = div19.classList
}

let div19 = document.querySelector('.div-19')
div19.onmouseout = t19


// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

function t20() {
    progress.value = +progress.value + 1
}

let progress = document.querySelector('progress')
progress.onmousemove = t20
