// Напишите функцию, которая принимает число и возвращает его факториал.

//Интерфейс для ввода из терминала
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Функция Факториала:
function factorial(n) {
  // Проверка n на неотрицательность
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Факториал берется из неотрицательного и целого числа!");
  }
  //Проверка на очень большое число:
  if (n > 170) {
    throw new Error("Введите число меньше 170");
  }
  // Условие если n = 1 или 0, факториал равен 1.
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
//Функция ввода числа:
function askNumber() {
  rl.question(
    "Введите число для вычисления факториала (или Ctrl+C для выхода) ",
    (answer) => {
      const raw = (answer || "").trim(); //убираем пробелы

      // Проверка на пустой ввод:
      if (raw === "") {
        console.error("Вы ничего не ввели! Попробуйте еще раз!");
        rl.close();
        return;
      }
      //Переводим введенное число в переменную n:
      const n = Number(raw);

      // Поимка ошибки:
      // try результат без ошибки cath с ошибкой
      try {
        const result = factorial(n);
        console.log(`Факториал числа ${n} = ${result}.`);
      } catch (error) {
        console.error("Произошла ошибка!", error.message);

        //Закрываем интерфейс ввода числа
      } finally {
        // После любого исхода (успех или ошибка) снова запрашиваем ввод числа
        askNumber();
      }
    },
  );
}
//Запуск функции ввода числ:
askNumber();
