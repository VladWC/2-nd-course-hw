// hw-02
// Задание 1

// let a=10;
// alert (a);
// a+=10;
// alert (a);

// Задание 2

// const releaseDate='2007';
// alert (`Первый iPhone вышел в ${releaseDate} году.`);

// Задание 3

// const creater='Бренданом Эйхом';
// alert (`Самая первая реализация JavaScript была создана ${creater}.`);

// Задание 4

// let ten=10;
// let two=2;
// alert (`Сумма: ${ten+two}. Разность: ${ten-two}. Произведение: ${ten*two}. Частное: ${ten/two}.`)

// Задание 5

// let result=two**5;
// alert(result);

// Задание 6

// a-=1;
// let b=2;
// alert (a%b);

// Задание 7

// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num++;
// num--;
// alert(num);

// Задание 8

// let age=prompt('Сколько Вам лет?');
// alert(age);

// Задание 9

// const user = {
//     name: 'Пользователь',
//     age: 28,
//     isAdmin: true
//  }

// Задание 10

// let name=prompt('Представтесь, пожалуйста!');
// alert (`Привет, ${name}!`);

// Задание доп hw-2

// let number=Number(prompt('Загадайте любое число!'));
// let result1=number*2;
// alert (result1);
// let result2=result1+10;
// alert (result2);
// let result3=result2/2;
// alert (result3);
// let result4=result3-number;
// alert (result4);
// alert (`Результат равен 5!`);

// hw-03
// Задание 1

// let password = 'пароль';
// let answer = String(prompt('Введите пароль'));
// answer = answer.toLocaleLowerCase();
// alert(password === answer? 'Пароль введен верно' : 'Пароль введен неправильно');
// // Задание 2
// let c =Number(prompt('Запишите в любое число'));
// console.log(c>0 && c<10 ? 'Верно': 'Неверно' );
// // Задание 3
// let d =Number(prompt('Введите число D'));
// let e =Number(prompt('Введите число e'));
// console.log(d>100 || e<100 ? 'Верно': 'Неверно' );

// Задание 4

// let a = '2';
// let b = '3';
// parseInt(a && b);
// alert(a + b);

// Задание 5

// let mounth = prompt("Введите месяц года");
// switch (mounth) {
//    case '1' && '2' && '12' && 'январь' && 'февраль' && 'декабрь':
//       console.log('Зима');
//       break;
//    case '3' && '4' && '5' && 'март' && 'апрель' && 'май':
//       console.log('Весна');
//       break;
//    case '6' && '7' && '8' && 'июнь' && 'июль' && 'август':
//       console.log('Лето');
//       break;
//    case '9' && '10' && '11' && 'сентябрь' && 'октябрь' && 'ноябрь':
//       console.log('Осень');
//       break;
//    default:
//       console.log('ввели что-то не то');
// }

// Задание 1 доп hw-3 

// hw-2.4
// Задание 1 

// for(i=0; i<2;i++){
//    console.log('Привет')
// }

// Задание 2

// for(i=1; i<=5;i++){
//    console.log(i)
// }

// Задание 3

// let i = 0;
// while (i < 23) {
//    if (i < 7){
//       i++;
//    continue;
//    }
//    console.log(i);
//    i++;
// }

// Задание 4

// const obj = {
//    "Коля" : '200',
//    "Вася" : '300',
//    "Петя" : '400'
// }
// for(const key in obj){
//    console.log(key, obj[key]);
// }

// Задание 5

// let n=1000
// let num=0 
// while(n>50){
//    n/=2
//    num++
// }
// console.log(n, num)

// Задание 6

// let dayFriday=4
// let allDay=30
// for(i=dayFriday;i<allDay;i+=7){
//    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
// }

// Задание 1 доп hw-2.4

// let k=100
// let iterations=0 
// while(k>0){
//    k-=7;
//    iterations++;
//    console.log(k, iterations)
// }

// Задание 2 доп hw-2.4

// let months = [ 
//    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
// ]
// let obj = {};
// for ( let i = 0; i <= 12; i++ ) {
//   obj[i+1] = months[i];
// }
// console.log(obj);

// Задание 3 доп hw-2.4

// let book = {
//    "название": 'Привет луна',
//    "автор": 'Шишилин А. В.',
//    "год издания" : '2003',
//    "жанр": 'фэнтези'
// }
// for(const key in book){
//    console.log(key, book[key]);
// }

// Задание 4 доп hw-2.4

// const numbers = [
//    12, 23, 34, 45, 65, 11, 24, 54, 32, 18
// ]
// let minimum = numbers[0];
// for (const item of numbers) {
//   if(item < minimum) {
//     minimum = item;
//   }
// }
// console.log(minimum);

// hw-2.5
// Задание 1

function min(a, b) {
	if (a < b) {
		return a;
} 
    else {
	return b;
	}
}
console.log(min(8, 4));
console.log(min(6, 6));

// Задание 2
 
function numbEven(numb) {
	if(numb%2===0){
		return("Число четное");
}
    else{
		return("Число нечетное");
	}
}

console.log(numbEven(7));

// Задание 3

function numbSquare(numb) {
	return(numb**2)
}

function numbSquare(numb) {
	let newNumb=(numb**2);
	return(`Получили ${newNumb}`);
}
console.log(numbSquare(7));

// Задание 4

function ageFunc(age) {
	if(age<=0){
		return('Вы ввели неправильное значение');
	}
	else if(age>0 || age<13) {
		return('Привет, друг!');
	}
	else if(age>13) {
		return('Добро пожаловать!');
	}
}
console.log(ageFunc(age=prompt("Сколько Вам лет?")));

// Задание 5

function numbers(c, d){
    if(isNaN(c, d)) {
		return('Одно или оба значения не являются числом');
	}
	else {
		return(c+d)
	}
}
console.log(numbers(5, 6));
console.log(numbers('d', 'h'));

// Задание 6

function cube(n) {
	if(isNaN(n)){
		return('Переданный параметр не является числом');
	}
	else {
		return(`${n} в кубе равняется ${n**4}`);
	}
}
console.log(cube(4));

// Задание 7

function getArea(){
	console.log(3.14*(this.radius**2));
}

function getPerimeter(){
	
	console.log(2*3.14*this.radius);
}

const circle1={
	radius: 4,
	getArea: getArea,
	getPerimeter: getPerimeter,
}
const circle2={
	radius: 8,
	getArea: getArea,
	getPerimeter: getPerimeter,
}

circle1.getArea();
circle1.getPerimeter();

circle2.getArea();
circle2.getPerimeter();

