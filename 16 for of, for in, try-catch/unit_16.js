// Task 3
//При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со страницы с помощью getElementsByClassName и в каждый записывает число 3, перезаписывая содержимое div.


function f3() {
    let divs = document.getElementsByClassName('out-3');
    for (let element of divs) {
        element.textContent = 3;
    }
}

document.querySelector('.b-3').addEventListener('click', f3);


// Task 4
//При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со страницы с помощью querySelectorAll и в каждый дописывает число 4.


function f4() {
    let divs = document.querySelectorAll('.out-4');
    for (let element of divs) {
        element.textContent = 4;
    }
}

document.querySelector('.b-4').addEventListener('click', f4);

// Task 5
//При нажатии .b-5 выполняете функцию f5. Функция должна: 1. Получить все div.out-5 со страницы в массив a5. 2. Cоздать новые div.out-5 через createElement. Добавить с помощью push созданный div в массив a5.
// Поскольку для коллекций push запрещен - то данная операция должна вызывать ошибку. Убедитесь в этом. Чтобы экранировать ошибку и не дать ей влиять на работу документа в целом, применим try, catch.

function f5() {
    let a5 = document.querySelectorAll('.out-5');
    let newDiv = document.createElement('div');
    newDiv.textContent = 'new div';
    newDiv.classList.add('out-5');
    try {
        a5.push(newDiv)
    }
    catch(error) {
        // если будет ошибка - то просто сообщим об этом в консоль, но код продолжит работать
        console.log(error);
        a5[3].after(newDiv);
    }
    console.log('already work');
}

document.querySelector('.b-5').addEventListener('click', f5);

// Task 6
//При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.

let a6 = [ [1,2], [3,4], [5,6]];

function f6() {
    let new_a6 = [];
    for (let arr of a6) {
        for (let element of arr) {
            new_a6.push(element)
        }
    }
    let joined_arr = new_a6.join(' ')
    document.querySelector('.out-6').textContent = joined_arr;
}

document.querySelector('.b-6').addEventListener('click', f6);

// Task 7
//При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a7 объект, где ключи - значения id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}

let a7 = [ { id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f7() {
    let as_arr = {};
    for (let arr of a7) {
        as_arr[arr['id']] = arr['name']
    }
    console.log(as_arr);
}

document.querySelector('.b-7').addEventListener('click', f7);

// Task 11
//При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через пробел.

let a11 = {
    one : 11,
    two : 7,
    three: 13,
    four: 0
}

function f11() {
    let out = ''
    for (let key in a11) {
        if (a11[key] > 10) {
            out += a11[key] + ' '
        }
    }
    document.querySelector('.out-11').textContent = out;
}

document.querySelector('.b-11').addEventListener('click', f11);
