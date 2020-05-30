// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2.
Добавьте параметр name с вашим именем на латинице.</p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {

    let t1_1 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=1')
            .then(data => {
                resolve(data.text());
            })
    });

    let t1_2 = new Promise((resolve, reject) => {
        fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=2&name=Little')
            .then(data => {
                resolve(data.text());
            })
    });

    Promise.all([t1_1, t1_2]).then(value => {
        document.querySelector('.out-1').innerHTML = value[0] + '<br>' + value[1]
    });

}

document.querySelector('.b-1').onclick = t1;

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {

    let t8_1 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php", {
            method: 'POST',
            headers: {
                //'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=5ADcB96BA48d3f80&action=7',
        })
            .then(data => {
                resolve(data.text());
            })
    });

    let t8_2 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php", {
            method: 'POST',
            headers: {
                //'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=5ADcB96BA48d3f80&action=8&year=89',
        })
            .then(data => {
                resolve(data.text());
            })
    });

    Promise.all([t8_1, t8_2]).then(value => {
        document.querySelector('.out-8').innerHTML = value[0] + '<br>' + value[1]
    });

}

document.querySelector('.b-8').onclick = t8;

