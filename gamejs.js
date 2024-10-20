// Game:«Угадай число»
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let numb = getRandomIntInclusive(0, 100);
function gusseNumb(){
while (true) {
    let userAnswer = prompt('Попробуй угадать число!');
    console.log(userAnswer);
    if (userAnswer<0 || userAnswer>100 || isNaN(userAnswer)) {
        alert('Это ерунда!');
    }
    else if(userAnswer===null){
        break;
    }
    else if (numb > userAnswer) {
        alert('Загаданое число больше!');
    }
    else if (numb < userAnswer) {
        alert('Загаданное число меньше');
    }
    else {
        alert('Ура, угадал!!!');
        break;
    }
}
}

// Game:«Простая арифметика»

let getRandomA=getRandomIntInclusive(0, 100);
let getRandomB=getRandomIntInclusive(0, 100);
const matSigns=['+','-','*','/'];
let genSignsResult=genSigns();
function genSigns() {
    return Math.floor(Math.random()*(matSigns.length));
}
// console.log(matSigns[genSignsResult]);
function simpleArifmetic() {
    let taskString = [`${getRandomA} ${matSigns[genSignsResult]} ${getRandomB}`];
    let task= eval(`${getRandomA} ${matSigns[genSignsResult]} ${getRandomB}`);
    console.log(task);
    let answer = +prompt(`Введите ответ на задачу: ${taskString.join()}`);
    if (answer === task) {
        alert('Ответ верный!');
      } else {
        alert(`Ответ неверный! Правильный ответ: ${task}`);
      }
} 
