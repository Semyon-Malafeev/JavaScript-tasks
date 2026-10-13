//Напишите функцию, которая принимает число n и
// возвращает сумму всех целых чисел от 1 до n
// включительно.

//Терминал для ввода числа:
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Функция сумма числе от 1 до n:
function sumNumN(n) {
  //Проверка n на число и на неотрицательность:
  if (!Number.isInteger(n)) {
    throw new Error("Вы ввели не число, введите целое положительное число!");
  }
  if (n === 0) {
    throw new Error("Вы ввели ноль, введите целое положительное число!");
  }
  if (n < 0) {
    throw new Error(
      "Вы ввели отрицательное число, введите целое положительное число!",
    );
  }
  if (n > 10000000) {
    throw new Error("Введите число меньше 10.000.000");
  }
  let sumN = 0;
  for (let i = 1; i <= n; i++) {
    sumN += i;
  }
  return sumN;
}

//Функция ввода числа:
function askNumber() {
  rl.question(
    "Введите целое положительное число для нахождения суммы всех числе от 1 до вводимого числа: ",
    (answer) => {
      const raw = (answer || "").trim();

      //Проверка на ввод пустого числа:
      if (raw === "") {
        console.error("Вы ничего не ввели, попробуйте еще раз!");
        return askNumber();
      }

      //Переводим введенное число из строки в число в переменную n:
      const n = Number(raw);

      try {
        const result = sumNumN(n);
        console.log(`Сумма всех чисел от 1 до ${n} равна`, result);
        console.log("Чтобы завершить программу нажмите (Ctrl + C)");
      } catch (error) {
        console.error("ОШИБКА!", error.message);
      } finally {
        askNumber();
      }
    },
  );
}
askNumber();
