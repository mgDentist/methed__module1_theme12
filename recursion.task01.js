'use strict';

const numberBotGame = (botNumber = Math.floor((Math.random()) * 100) + 1) => {
  let userAnswer = prompt('Какое число от 1 до 100 я загадал?');

  if (userAnswer === null) {
    alert('Игра закончена');
    return;
  }

  userAnswer = Number(userAnswer);

  if (isNaN(userAnswer)) {
    alert('Введи число!');
    numberBotGame(botNumber);
    return;
  }

  if (botNumber === userAnswer) {
    alert('Правильно');
  } else if (userAnswer < botNumber) {
    alert('Больше');
  } else if (userAnswer > botNumber) {
    alert('Меньше');
  }

  numberBotGame(botNumber);
};

numberBotGame();
