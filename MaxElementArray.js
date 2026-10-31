// Поиск максимального элемента в массиве

"use strict";

//Интерфейс для ввода с терминала:
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function maxNum() {
  rl.question("Введите числа через пробел: ", (input) => {
    const array = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter((n) => !Number.isNaN(n));

    console.log("Введенный массив: ", array);

    rl.close();
    let count = 0;
    for (const i of array) {
      if (i > count) {
        count = i;
      }
    }
    console.log("Максимальное число в массиве: ", count);
  });
}
maxNum();
