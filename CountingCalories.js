// Расчет дневной нормы калорий
"use strict";

//Интерфейс для ввода из терминала:
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Функция для расчета колорий:
function harrisBenedikt(weight, height, age, sex, PAC) {
  let BRM;
  if (sex === "M" || sex === "М") {
    BRM = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    BRM = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  return BRM * PAC;
}

//Проверка на число:
function isNumber(value) {
  const num = Number(value);
  if (Number.isNaN(num) || num <= 0) {
    return NaN;
  }
  return num;
}

//Функция на запрос данных:
function requestData() {
  rl.question("Введите желаемый вес(кг): ", (weightStr) => {
    const weight = isNumber(weightStr.trim());
    if (Number.isNaN(weight)) {
      console.error("Неверный формат. Введите положительное число.");
      return requestData();
    }

    rl.question("Введите ваш рост(см): ", (heightStr) => {
      const height = isNumber(heightStr.trim());
      if (Number.isNaN(height)) {
        console.error("Неверный формат. Введите положительное число.");
        return requestData();
      }

      rl.question("Введите сколько вам полных лет: ", (ageStr) => {
        const age = isNumber(ageStr.trim());
        if (isNaN(age)) {
          console.error("Неверный формат. Введите положительное число.");
          return requestData();
        }

        rl.question("Введите ваш пол (M/W): ", (sexStr) => {
          const sex = sexStr.trim().toUpperCase();
          if (
            sex !== "M" &&
            sex !== "W" &&
            sex !== "М" &&
            sex !== "Ж" &&
            sex !== "F"
          ) {
            console.error("Не верный пол. Введите M или W");
            return requestData();
          }

          rl.question(
            "Введите коэффициент вашей физической активности:\n" +
              "- Сидячий образ жизни — ×1,2.\n" +
              "- Лёгкая активность (прогулки, зарядка 1–3 раза в неделю) — ×1,375.\n" +
              "- Умеренная активность (тренировки 3–5 раз в неделю) — ×1,55\n" +
              "- Высокая активность (спорт почти каждый день) — ×1,725\n" +
              "- Очень высокая активность (интенсивные тренировки 2 раза в день, \n" +
              "тяжёлая физическая работа) — ×1,9: ",
            (PACStr) => {
              const PAC = isNumber(PACStr.trim().replace(",", "."));
              if (Number.isNaN(PAC)) {
                console.error(
                  "Неверный формат коэффициента. Введите число больше 0.",
                );
                return requestData();
              }

              // Результат:
              const calories = harrisBenedikt(weight, height, age, sex, PAC);
              console.log(
                `Ваша дневная норма калорий: ${calories.toFixed(2)} ккал`,
              );
              rl.close();
            },
          );
        });
      });
    });
  });
}

requestData();
