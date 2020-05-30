// Task 4 ============================================
/*  На странице созданы 3 span.task-4 c атрибутом data. С помощью forEach переберите их и добавьте атрибуты в массив a4_res  Запускаться решение должно при вызове функции t4.*/

function t4() {
    let a4_res = [];
    document.querySelectorAll('.task-4').forEach(elem => {
        let atr_value = elem.getAttribute('data')
        a4_res.push(atr_value)
    })
    document.querySelector('.out-4').innerHTML = a4_res;
}

document.querySelector('.b-4').onclick = t4;


// Task 5 ============================================
/*  На странице созданы 3 p.task-5 c атрибутом data. С помощью forEach переберите их и добавьте событие клик. Напишите функцию t5, которая будет запускаться при клике и добавлять атрибут data элемента, по которому кликнули в массив a5_res.*/

let a5_res = [];

function t5() {
    document.querySelectorAll('.task-5').forEach(elem => {
        let atr_value = elem.getAttribute('data')
        a5_res.push(atr_value)
    })
    document.querySelector('.out-5').innerHTML = a5_res;
}

document.querySelectorAll('.task-5').forEach(elem => {
    elem.onclick = t5;
});


document.querySelectorAll('.dva').forEach(element => {
    element.onclick = () => {
        element.classList.toggle('rrr')
    }
})