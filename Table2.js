//Дано натуральное число n( n ≤ 9). Напишите программу, которая печатает таблицу размером n×5, где в i-ой строке указано число i (числа отделены одним пробелом).

"use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function table2() {
  rl.question("Введите натуральное число от 1 до 9: ", (input) => {
    const num = Number(input.trim());

    if (!Number.isInteger(num) || num < 1 || num > 9) {
      console.log("Ошибка. Введите натуральное число от 1 до 9");
      rl.close();
      return;
    }

    for (let i = 1; i <= num; i++) {
      let row = "";
      for (let j = 0; j < 5; j++) {
        row += i + " ";
      }
      console.log(row.trimEnd());
    }
    rl.close();
  });
}

table2();
