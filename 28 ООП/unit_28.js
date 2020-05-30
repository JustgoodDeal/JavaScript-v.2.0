class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }

    draw(div) {
        let out = `${this.image}<br>${this.name}<br>${this.count}`
        document.querySelector(div).innerHTML += out
    }
}

class Goods2 extends Goods {
    constructor(name, amount, image, count, sale = false) {
        super(name, amount, image, count);
        if (sale) {
            sale = true
        }
        this.sale = sale;
    }

    draw(div) {
        let out = `${this.image}<br>${this.name}<br>${this.count}`
        if (this.sale) {
            out = 'For sale!<br>' + out
        }
        document.querySelector(div).innerHTML += out
    }
}

 goods = new Goods('svekla', 100)
 console.log(goods)

 goods2 = new Goods('tikva', 150, 'link', 20)
 goods2.draw('.out-4')

 goods3 = new Goods2('sliva', 200, 'another link', 22, 'yes')
 goods3.draw('.out-6')


class Valid {
    constructor(email, password, isValid=false) {
        this.email = email;
        this.password = password;
        this.isValid = isValid;
    }

    validate() {
        if (this.password.length > 5) {
            this.isValid = true
        }
        return this.isValid
    }
}

class Valid2 extends Valid {
    constructor(email, password, isValid=false, emailError='', passwordError='') {
        super(email, password, isValid=false);
        this.emailError = emailError;
        this.passwordError = passwordError;
    }

    validate() {
        let pass_isValid = super.validate()
        let email_isValid = false
        if (this.email) email_isValid = true
        if (!pass_isValid || !email_isValid) this.isValid = false
        if (!this.isValid) {
            if (!pass_isValid) {
                this.passwordError = 'min length 6'
            }
            if (!email_isValid) {
                this.emailError = 'email empty'
            }
        }
    }

}

valid = new Valid('some@mail.ru', 'abcde')
console.log(valid.validate())

valid2 = new Valid('some2@mail.ru', 'abcdefg')
console.log(valid2.validate())

valid3 = new Valid2('', 'abcdefgh')
valid3.validate()
console.log(valid3)

valid4 = new Valid2('some4@mail.ru', 'abcdefgh')
valid4.validate()
console.log(valid4)


  // Task 1
  // Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект.


  //Task 2.
 //  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

 
 //Task 3.
 //  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).


 // Task 4.
 // Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.


 //Task 5.
 // Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.
  

 // Task 6.
 // Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.


 // Task 7.
 // Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.
  
 
 //Task 8.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.
  
 
 //Task 9.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.
  
 
 //Task 10.
 // Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.
  
 
 //Task 11.
 // Создайте на основе класса Valid2 объект valid3 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
  
 
 //Task 12.
 // Создайте на основе класса Valid2 объект valid4 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
  