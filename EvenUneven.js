//Напишите функцию, которая принимает число и возвращает true, если оно чётное, и false — если нечётное.

"use strict";

//Интерфейс для ввода из терминала:
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Функция на чет не чет:
function evenUneven(n) {
  //Проверка введенного числоа на неотрицательность:
  if (!Number.isInteger(n)) {
    throw new Error("Введено не целое число.");
  }

  if (n % 2 === 0) {
    return true;
  }
  return false;
}

//Функция на запрос числа:
function askNumber() {
  rl.question("Введите число, для определения его четности: ", (answer) => {
    const raw = (answer || "").trim(); //Если в answer будет Undefined или Nun то в raw попадет пустая строка
    if (raw === "") {
      console.error("Вы ничего не ввели. Попробуйте еще раз!");
      return askNumber();
    }
    const n = Number(raw);
    try {
      const result = evenUneven(n);
      if (result) {
        console.log(`Число ${n} четное!`);
      } else {
        console.log(`Число ${n} НЕ четное!`);
      }
    } catch (error) {
      console.error("Ошибка!", error.message);
    } finally {
      askNumber();
    }
  });
}
askNumber();
