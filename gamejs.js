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

let getRandomA=getRandomIntInclusive(0, 10);
let getRandomB=getRandomIntInclusive(0, 10);
function genSigns() {
    return Math.floor(Math.random() * (matSigns.length));
}
let matSigns=genSigns(['+','-','*','/']);
let example=[getRandomA,matSigns,getRandomB]
function simpleArifmetic() {
    return result=example.join();
    let userSolution = prompt('Подсчитай ответ');
    if(userSolution===result){
        console.log('tru');
    }
    else{
        console.log('folse');
    }
}    
