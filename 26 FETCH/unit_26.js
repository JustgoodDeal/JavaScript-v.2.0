// Task 4 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
    fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=4&num1=1&num2=40')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.out-4').innerHTML = data
        })
}

document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
    fetch('http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=5')
        .then(response => {
            if (response['status'] == 200)
                return response.text();
        })
        .then(data => {
            document.querySelector('.out-5').innerHTML = data
        })
}

document.querySelector('.b-5').onclick = t5;


// Task 16 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {
    fetch("http://getpost.itgid.info/index2.php", {
        method: 'POST',
        headers: {
            //'Content-Type': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=5ADcB96BA48d3f80&action=7',
    })
        .then(response => response.text())
        .then(data => {
            document.querySelector('.out-16').innerHTML = data
        })
}

document.querySelector('.b-16').onclick = t16;

