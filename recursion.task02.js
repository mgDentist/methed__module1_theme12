'use strict';

const recursiveFoo = (arr) => {
  const randomNumber = Math.floor(Math.random() * 11);
  arr.push(randomNumber);
  const sum = arr.reduce((acc, number) => acc + number, 0);

  if (sum < 50) {
    return recursiveFoo(arr);
  } else {
    return arr;
  }
};

recursiveFoo([5, 2, 9]);
