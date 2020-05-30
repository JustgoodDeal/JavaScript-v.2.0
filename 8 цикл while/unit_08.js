//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
    let years = '';
    let year = 1950;
    while (year <= 2000) {
        years += year + ' ';
        year += 2;
    }
    document.querySelector('.out-10').innerHTML = years;
}

document.querySelector('.b-10').onclick = t10;


//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13() {
    let inputs = document.querySelectorAll('.i-13');
    i = 0;
    while (i < inputs.length) {
        inputs[i].value = i + 1
        i++;
    }
}

document.querySelector('.b-13').onclick = t13;
