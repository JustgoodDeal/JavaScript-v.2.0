//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.


function t1() {
    let stroka_1_50 = ''
    for (let i = 1; i < 51; i++) {
        stroka_1_50 += i + ' '
    }
    document.querySelector('.out-1').innerHTML = stroka_1_50
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла.

function t2() {
    let stroka_2_122 = ''
    for (let i = 2; i < 123; i += 2) {
        stroka_2_122 += i + ' '
    }
    document.querySelector('.out-2').innerHTML = stroka_2_122
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла.

function t3() {
    let stroka_25_7 = ''
    for (let i = 25; i > 6; i--) {
        stroka_25_7 += i + ' '
    }
    document.querySelector('.out-3').innerHTML = stroka_25_7
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла.


function t4() {
    let stroka_77_35 = ''
    for (let i = 77; i > 34; i -= 3) {
        stroka_77_35 += i + '_'
    }
    document.querySelector('.out-4').innerHTML = stroka_77_35
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла.

function t5() {
    let stroka_1_17 = ''
    for (let i = 1; i < 18; i++) {
        if (i % 2 == 0)
            stroka_1_17 += i + '_**'
        else
            stroka_1_17 += i + '_*'
    }
    document.querySelector('.out-5').innerHTML = stroka_1_17
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла вводит пользователь в i-6.

function t6() {
    let out = document.querySelector('.out-6');
    out.innerHTML = ''
    let count = +document.querySelector('.i-6').value;
    let stars = '******<br>';
    for (let i = 0; i < count; i++) {
        out.innerHTML += stars
    }
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла.

function t7() {
    let stroka = ''
    let from = +document.querySelector('.i-7').value;
    for (let i = from; i >= 0; i--) {
        stroka += i + ' '
    }
    document.querySelector('.out-7').innerHTML = stroka
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла.

function t8() {
    let stroka = ''
    let from = +document.querySelector('.i-81').value;
    let to = +document.querySelector('.i-82').value;
    for (let i = from; i <= to; i++) {
        stroka += i + ' '
    }
    document.querySelector('.out-8').innerHTML = stroka
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл.
// цикл - один

function t9() {
    let stroka = ''
    let number1 = +document.querySelector('.i-91').value;
    let number2 = +document.querySelector('.i-92').value;
    let from = number1;
    let to = number2;
    if (number1 > number2) {
        from = number2;
        to = number1;
    }
    for (let i = from; i <= to; i++) {
        stroka += i + ' '
    }
    document.querySelector('.out-9').innerHTML = stroka
}

document.querySelector('.b-9').onclick = t9;


//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two


function t11() {
    let stroka = ''
    let divs = document.querySelectorAll('.div-11');
    for (let i = 0; i < divs.length; i++) {
        stroka += divs[i].innerHTML + ' '
    }
    document.querySelector('.out-11').innerHTML = stroka
}

document.querySelector('.b-11').onclick = t11;

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’


function t12() {
    let divs = document.querySelectorAll('.div-12');
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.background = 'orange'
    }
}

document.querySelector('.b-12').onclick = t12;


//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.


function t14() {
    let radios = document.querySelectorAll('.i-14');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            document.querySelector('.out-14').innerHTML = radios[i].value
        }
    }
}

document.querySelector('.b-14').onclick = t14;
