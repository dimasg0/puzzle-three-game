const puzzleSimple =
  '{"puzzle": [{"text": "Дивний дощ часом йде: сотнею струменів він догори б`є", "answer": "Водограй" }, {"text": "Чим більше з неї береш, тим більше вона стає", "answer": "Яма" }, {"text": "Хто може підняти і пересунути коня та слона?", "answer": "Шахіст"}, {"text": "Вдень вікно розбивається, а вночі само вставляється", "answer": "Ополонка"}, {"text": "Є на світі кінь — всьому світу не вдержати", "answer": "Вітер"}, {"text": "Зубів не має, а кусається ", "answer": "Кропива"}]}';
const puzzleMidle =
  '{"puzzle": [{"text": "Дано: 10 + 3 = 1. А чому за тих самих умов дорівнюватиме 9 + 4?", "answer": "1"}, {"text": "На годиннику 3 години 15 хвилин, скільки градусів між стрілками?", "answer": "0"}]}';
const puzzleHurd =
  '{"puzzle": [{"text": "Два яйця варяться 4 хвилини, скільки варитиметься десять яєць?(тільки число)", "answer": "4"}, {"text": "Поверніть мене на бік, і я стану всім. Розріжте мене наполовину, і я перетворюся на ніщо. Що я?", "answer": "Нескінченность"}, {"text": "Яке число буде наступним в цьому ряду: 1, 11, 21, 1211, 111221, 312211, ...", "answer": "13112221"}, {"text": "Ви знаходитеся в темній кімнаті зі свічкою, дерев`яною піччю і газовою лампою. У вас тільки один сірник, що ви запалите першим?", "answer": "Сірник"}]}';

let obj;

let level = document.getElementById("level");
let error = document.getElementById("error");
let qs = document.getElementById("qs");
let check = document.getElementById("chech");

let back = document.getElementById("back");

//получаем сложность игры
let chooseLevel = sessionStorage.getItem("testName");

let myResult = localStorage.getItem("myResust");
let myResultNew = localStorage.getItem("newResult");

let myResultH2 = document.getElementById("myresult");

myResultH2.innerHTML = "Останній найкращий результат: " + myResult;

//ответ
let answer = document.getElementById("textQs");

//количество попыток
let count = document.getElementById("count");

//перезагрузка игры
let reload = document.getElementById("reload");

let scoreCount = 0;
let score = document.getElementById("score");
score.innerHTML = "Рахунок: " + scoreCount;

error.hidden = true;
reload.hidden = true;

let counter = 0;

if (chooseLevel === "simple") {
  level.innerHTML = "Рівень: Звичайний";
  counter = 5;

  obj = JSON.parse(puzzleSimple);
} else if (chooseLevel === "middle") {
  level.innerHTML = "Рівень: Середній";
  counter = 3;

  obj = JSON.parse(puzzleMidle);
} else if (chooseLevel === "hard") {
  level.innerHTML = "Рівень: Важкий";
  counter = 1;

  obj = JSON.parse(puzzleHurd);
}

count.innerHTML = "Залишилося спроб: " + counter;

let length = obj.puzzle.length;

let number = Math.ceil(Math.random() * length);

qs.innerHTML = "Питання: " + obj.puzzle[number - 1].text;

check.addEventListener("click", function () {
  check.disabled = true;

  if (answer.value === "") {
    error.hidden = false;
    error.innerHTML = "Увага! Напишіть відповідь";

    check.disabled = false;
  } else if (
    answer.value.toLocaleLowerCase() ===
    obj.puzzle[number - 1].answer.toLocaleLowerCase()
  ) {
    error.hidden = false;
    error.innerHTML = "Так, все вірно";

    scoreCount++;
    score.innerHTML = "Рахунок: " + scoreCount;

    setTimeout(() => {
      number = Math.ceil(Math.random() * length);
      qs.innerHTML = "Питання: " + obj.puzzle[number - 1].text;
      error.hidden = true;
      check.disabled = false;
    }, 2000);
  } else {
    if (counter == 0) {
      scoreCount = 0;
      alert("Гра завершена");
    } else {
      counter--;
      count.innerHTML = "Залишилося спроб: " + counter;
      check.disabled = false;

      if (counter == 0) {
        error.hidden = false;
        error.innerHTML = "Гра завершена, ваш рахунок: " + scoreCount;

        if (myResult > scoreCount) {
          localStorage.setItem("myResust", myResult);
        } else {
          localStorage.setItem("myResust", scoreCount);
        }

        reload.hidden = false;
        check.disabled = true;
      }
    }
  }
});

reload.addEventListener("click", () => {
  location.reload();
});

back.addEventListener("click", () => {
  location.href = "/html/index.html";
});


deleteBestResult = () => {
   localStorage.clear();
}