// 8. Создайте input(range). При изменении положения ползунка выводите его значение

let range = document.querySelector('.input-task8');
let div8 = document.querySelector('.result-task8');

range.oninput = () => {
        const range_val = range.value;
        div8.innerHTML = range_val;
}
