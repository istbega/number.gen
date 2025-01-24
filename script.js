document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const minValue = parseInt(document.getElementById("minValue").value);
    const maxValue = parseInt(document.getElementById("maxValue").value);
    let count = parseInt(document.getElementById("count").value);
    const unique = document.getElementById("unique").checked;

    // Проверка, чтобы минимальное значение было меньше максимального
    if (minValue >= maxValue) {
      alert("Minimum value should be less than maximum value!");
      return;
    }

    // Лимитируем количество строк генерации до 10
    if (count > 10) {
      count = 10; // Устанавливаем значение на 10
      alert("Максимальное количество строк генераций — 10");
    }

    const result = generateRandomNumbers(minValue, maxValue, count, unique);
    document.getElementById("result").textContent = result.join(", ");
  });

// Функция генерации случайных чисел
function generateRandomNumbers(min, max, count, unique) {
  const numbers = [];
  const generated = new Set();

  while (numbers.length < count) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    if (unique) {
      if (!generated.has(num)) {
        numbers.push(num);
        generated.add(num);
      }
    } else {
      numbers.push(num);
    }
  }

  return numbers;
}

// Запрещаем ввод значений больше 10 в поле count
document.getElementById("count").addEventListener("input", function () {
  let countValue = this.value;

  // Если введено больше 10, то сбрасываем на 10
  if (parseInt(countValue) > 10) {
    this.value = 10;
    alert("Максимальное количество строк генераций — 10");
  }
});

// Для предотвращения вставки значений больше 10
document.getElementById("count").addEventListener("change", function () {
  let countValue = this.value;

  // Если значение больше 10, сбрасываем на 10
  if (parseInt(countValue) > 10) {
    this.value = 10;
    alert("Максимальное количество строк генераций — 10");
  }
});
