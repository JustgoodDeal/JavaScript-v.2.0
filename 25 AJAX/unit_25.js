
// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

let xhttp = new XMLHttpRequest();

function t1() {
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=1", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.out-1').innerHTML = this.responseText
        }
    }
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
    xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=5ADcB96BA48d3f80&action=2&name=Brus", true);
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.out-2').innerHTML = this.responseText
        }
    }
}

document.querySelector('.b-2').onclick = t2;


// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
    xhttp.open("POST", "http://getpost.itgid.info/index2.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('auth=5ADcB96BA48d3f80&action=3&num1=30&num2=33')
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('.out-12').innerHTML = this.responseText
        }
    }
}

document.querySelector('.b-12').onclick = t12;
