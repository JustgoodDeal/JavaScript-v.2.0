// Task 02. Дан массив a2= [2,3,4,5,10,11,12] - с помощью map переберите массив и создайте новый массив a2_res,
// куда добавьте элементы данного массива возведенные во вторую степень

let a2 = [2,3,4,5,10,11,12]

function t2() {
    let a2_res = a2.map(item => {
        return item ** 2
    });
    document.querySelector('.out-2').textContent = a2_res;
}


document.querySelector('.b-2').onclick = t2;

// Task 4 ============================================
/*  Следующая задача проще будет решаться через метод forEach, который мы изучим во второй части урока! Сейчас мы делаем костыль, для отработки навыков работы с map. Дан массив a4 = [4,"3",6,7,"12",34,"56",78,90,11] - с помощью map переберите массив и создайте новый массив a4_res куда добавьте только числа из массива a4. Действия должны запускаться при вызове функции t4. Действия должны запускаться при вызове функции t4.*/

let a4 = [4,"3",6,7,"12",34,"56",78,90,11];

function t4() {
    let a4_res = [];
    a4.map(item => {
            if (Number.isInteger(item)) {
                a4_res.push(item)
            }
        });
    document.querySelector('.out-4').textContent = a4_res;
}


document.querySelector('.b-4').onclick = t4;


// Task 6 ============================================
/*  Дан массив b6 = [3, 14, 15, 92, "6", "5", "hello", 32]. C помощью filter переберите массив b6 и создайте новый b6_res, который содержит только числа из b6. Действия должны запускаться при вызове функции t6. */

let b6 = [3, 14, 15, 92, "6", "5", "hello", 32]

function t6() {
    let b6_res = b6.filter(item => {
        if (Number.isInteger(item)) {
            return true
        }
    });
    document.querySelector('.out-6').textContent = b6_res;
}

document.querySelector('.b-6').onclick = t6;


// Task 9 ============================================
/*  Дан массив b9 = [3, "hello", 4, "world", 5, "hi"]. С помощью filter, переберите массив b5 и создайте новый массив b9_num и b9_string, которые содержат первый - числа из b9, второй - строки. Задачу решить одним filter. Действия должны запускаться при вызове функции t9. */

let b9 = [3, "hello", 4, "world", 5, "hi"]

function t9() {
    let b9_string = [];
    let b9_num = b9.filter(item => {
        if (Number.isInteger(item)) {
            return true
        } else {
            b9_string.push(item)
        }

    });
    document.querySelector('.out-9').textContent = `Int: ${b9_num}; Str: ${b9_string}`;
}

document.querySelector('.b-9').onclick = t9;


// Task 10 ============================================
/*  Дан массив b10 = [ [1,2,3], [3,4,6], [4,5,7], [8,9,3]]. С помощью filter переберите массив и создайте новый b10_res, в который входят вложенные массивы содержащие цифру 3. Действия должны запускаться при вызове функции t10. */

let b10 = [ [1,2,3], [3,4,6], [4,5,7], [8,9,3]]

function t10() {
    let b10_res = b10.filter(arr => {
        if (arr.includes(3)) {
            return true
        }
    });
    console.log(b10_res)
    document.querySelector('.out-10').textContent = b10_res;
}

document.querySelector('.b-10').onclick = t10;