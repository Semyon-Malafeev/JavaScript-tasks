//Дано натуральное число n(n ≤ 9). Напишите программу, которая печатает таблицу размером n×3, состоящую из данного числа (числа отделены одним пробелом).

"use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function table() {
  rl.question("Введите натуральное число от 0 до 9: ", (input) => {
    const number = input.trim();
    const num = Number(number);
    if (Number.isNaN(num) || 0 > num || num > 9 || !Number.isInteger(num)) {
      console.log("Ошибка. Введите натуральное число от 0 до 9 ");
      rl.close();
      return;
    }
    for (let i = 0; i < num; i++) {
      let row = "";
      for (let j = 0; j < 3; j++) {
        row += num + " ";
      }
      console.log(row.trimEnd());
    }
    rl.close();
  });
}
table();
