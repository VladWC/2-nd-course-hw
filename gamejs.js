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

function simpleArifmetic() {
    let getRandomA=getRandomIntInclusive(0, 100);
    let getRandomB=getRandomIntInclusive(0, 100);
    const matSigns=['+','-','*','/'];
    let genSignsResult=genSigns();
console.log(matSigns[genSignsResult]);
    function genSigns() {
        return Math.ceil(Math.random()*(matSigns.length));
    }
    while(true) { 
    let taskString = [`${getRandomA} ${matSigns[genSignsResult]} ${getRandomB}`];
    let task= Math.floor(eval(`${getRandomA} ${matSigns[genSignsResult]} ${getRandomB}`));
    // console.log(taskString);
    // console.log(taskString = [`${getRandomA} / ${getRandomB}!!!`]);
    console.log(task);
    let answer = +prompt(`Введите ответ на задачу: ${taskString.join()}`);
    if (answer === task) {
        alert('Ответ верный!');
        break;
      } 
      else if(matSigns[genSignsResult]==='/') {
        alert('Ответ округлить до целого!');
      } 
      else  {
        alert(`Ответ неверный! Правильный ответ: ${task}`);
      }
    }
} 

// Game:«Переверни текст»

function refersText() {
    let userText = String(prompt("Введите любое слово"));
    let textRevers = userText.split('').reverse().join('');
    alert(textRevers);
}

// Game:«Викторина»

const quiz = [
    {
        question: "Какой цвет неба?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function guizGame() {

}


