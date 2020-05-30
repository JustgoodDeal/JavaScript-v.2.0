// Task 1
// Создайте set. Добавьте в него три элемента 'h', 'b', 'o', 'h'. Выведите в консоль.

let mno = new Set();
mno.add('h');
mno.add('b');
mno.add('o');
mno.add('h');
console.log(mno);
// console.log(new Set(['h', 'b', 'o', 'h'])); // либо


// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна добавить в набор s2 элементы вводимые пользователем в i-2. Функция должна возвращать s2.


// let s2 =

function f2() {
    let list = document.querySelector('.i-2').value.split(' ');
    return new Set(list)
}

document.querySelector('.b-2').onclick = () => {
    console.log(f2());
}


// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна удалить из набора s3, строку введенную пользователем в i-3. Функция должна возвращать s3.

let s3 = new Set(['one', 'two', 'four']);

function f3() {
    let value = document.querySelector('.i-3').value;
    s3.delete(value)
    return s3
}

document.querySelector('.b-3').onclick = () => {
    console.log(f3());
}


// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна проверить наличие в наборе s4 строки введенной пользователем в i-4. Если строка есть - то вывести в out-4 true. Если нет - false.


let s4 = new Set(['a', 'b', 'c', 'z']);

function f4() {
    let value = document.querySelector('.i-4').value;
    document.querySelector('.out-4').textContent = s4.has(value)
}

document.querySelector('.b-4').onclick = f4;

// Task 5
// // При нажатии b-5 выполняете функцию f5. Функция должна  вывести в out-5 длину набора s5.


let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);

function f5() {
    document.querySelector('.out-5').textContent = s5.size
}

document.querySelector('.b-5').onclick = f5;


// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна принимать набор set в качестве параметра и выводить его содержимое в указанный элемент. Элемент указывается как второй параметр функции f10. Вывод значений - через пробел.

function f10(out_set, elem) {
    let out = '';
    for (let el of out_set) {
        out += el + ' ';
    }
    document.querySelector(elem).textContent = out
}

document.querySelector('.b-10').onclick = () => {
    let a10 = new Set(['4', '5', '6']);
    f10(a10, '.out-10');
};
