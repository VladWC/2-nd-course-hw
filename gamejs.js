// Game:«Угадай число»
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let numb = getRandomIntInclusive(0, 100);
function gusseNumb(){
while (i = numb) {
    let userAnswer = prompt('Попробуй угадать число!');
    if (i == userAnswer && i == numb) {
        alert('Ура, угадал!!!');
        break;
    }
    if (i > userAnswer) {
        alert('Загаданое число больше!');
    }
    if (i < userAnswer) {
        alert('Загаданное число меньше');
    }
}
}

// Game:«Простая арифметика»

let getRandomA=getRandomIntInclusive(0, 100);
let getRandomB=getRandomIntInclusive(0, 100);
const matSigns=['+','-','*','/'];
function genSigns() {
    return Math.floor(Math.random()*(matSigns.length));
}
function simpleArifmetic() {
    let task = `${getRandomA}'${genSigns()}'${getRandomB}`;
    console.log(task);
    let answer = prompt('Введите ответ на задачу:');
    if (answer === isNaN(task)) {
        console.log('Ответ верный!');
      } else {
        console.log(`Ответ неверный! Правильный ответ: ${task}`);
      }
} 
