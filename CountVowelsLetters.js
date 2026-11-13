//Дана строка (может содержать буквы в разном регистре).
// С помощью цикла посимвольно пройдись по строке и посчитай
// количество гласных букв (a, e, i, o, u). Регистр не важен.
// Выведи итоговое число. Цель — перебор строки и проверка условий.

"use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function stringArray() {
  rl.question("Введите строку латинскими буквами: ", (input) => {
    const array = input.toLowerCase();
    rl.close();

    let countA = 0;
    let countE = 0;
    let countI = 0;
    let countO = 0;
    let countU = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i] === "a") {
        countA += 1;
      }
      if (array[i] === "e") {
        countE += 1;
      }
      if (array[i] === "i") {
        countI += 1;
      }
      if (array[i] === "o") {
        countO += 1;
      }
      if (array[i] === "u") {
        countU += 1;
      }
    }

    console.log(
      `Колличество гласных букв: "a" ${countA} шт,
                          "e" ${countE} шт,
                          "i" ${countI} шт,
                          "o" ${countO} шт,
                          "u" ${countU} шт.`,
    );
  });
}
stringArray();
