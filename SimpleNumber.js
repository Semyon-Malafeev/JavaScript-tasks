//Напишите функцию, которая проверяет, является ли переданное число простым.

const readline = require("readline");

//Интерфейс для ввода из терминала:
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Функция определения простого числа:
function simpleNumber(n) {
  // Проверка на целое число:
  if (!Number.isInteger(n)) {
    throw new Error("Вы ввели не целое число, попробуйте еще раз!");
  }
  //Проверка на ввод числа меньше 2:
  if (n < 2) {
    return false;
  }
  // Цикл Фор основное решение:
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
//Функция ввода числа:
function askNumber() {
  rl.question(
    "Введите число для определения, является ли оно простым (или Ctrl+C для выхода) ",
    (answer) => {
      const raw = (answer || "").trim(); //убираем пробелы

      // Проверка на пустой ввод:
      if (raw === "") {
        console.error("Вы ничего не ввели, попробуте еще раз!");
        askNumber();
        return;
      }
      // Переводим что введено из строки в переменную n:
      const n = Number(raw);

      // Вывод ответа и поимка ошибок:
      try {
        // В переменную result помещаем true или false
        const result = simpleNumber(n);

        if (result) {
          console.log(`Число ${n} является простым.`);
        } else {
          console.log(`Число ${n} НЕ является простым.`);
        }
        // Ловим ошибки:
      } catch (error) {
        console.error("Произошла ошибка!", error.message);
      } finally {
        askNumber();
      }
    },
  );
}
// Запуск функции ввода чисел:
askNumber();
