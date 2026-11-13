//Всем известно, что ведьмак способен одолеть любых чудовищ, однако его услуги обойдутся недешево.
// К тому же ведьмак не принимает купюры, он принимает только чеканные монеты.
// В мире ведьмака существуют монеты с номиналами 1,5,10,25.
// Напишите программу, которая определяет, какое минимальное количество чеканных монет нужно заплатить ведьмаку.

"use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function moneyCheck() {
  rl.question(
    "Введите сумму которую нужно разделить по номиналам: ",
    (input) => {
      const money = input.trim();
      let num = Number(money);

      if (Number.isNaN(num) || !Number.isInteger(num) || num <= 0) {
        console.log("Ошибка.Введите одно целое число.");
        rl.close();
        return;
      }

      let count25 = 0;
      let count10 = 0;
      let count5 = 0;
      let count1 = 0;

      while (num >= 25) {
        count25++;
        num -= 25;
      }
      while (num >= 10) {
        count10++;
        num -= 10;
      }
      while (num >= 5) {
        count5++;
        num -= 5;
      }
      while (num >= 1) {
        count1++;
        num -= 1;
      }
      console.log(`Количество необходимых монет - ${count25 + count10 + count5 + count1} шт,
               *номиналом 25 - ${count25} шт,
               *номиналом 10 - ${count10} шт,
                *номиналом 5 - ${count5} шт,
                *номиналом 1 - ${count1} шт`);
      rl.close();
    },
  );
}
moneyCheck();
