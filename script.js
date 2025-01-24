document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const minValue = parseInt(document.getElementById("minValue").value);
    const maxValue = parseInt(document.getElementById("maxValue").value);
    const count = parseInt(document.getElementById("count").value);
    const unique = document.getElementById("unique").checked;

    // Проверка, чтобы минимальное значение было меньше максимального
    if (minValue >= maxValue) {
      alert("Minimum value should be less than maximum value!");
      return;
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
