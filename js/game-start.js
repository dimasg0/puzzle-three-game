const puzzleSimple =
  '{"puzzle": [{"text": "Дивний дощ часом йде: сотнею струменів він догори б`є", "answer": "Водограй" }, {"text": "Чим більше з неї береш, тим більше вона стає", "answer": "Яма" }, {"text": "Хто може підняти і пересунути коня та слона?", "answer": "Шахіст"}, {"text": "Вдень вікно розбивається, а вночі само вставляється", "answer": "Ополонка"}, {"text": "Є на світі кінь — всьому світу не вдержати", "answer": "Вітер"}, {"text": " Зубів не має, а кусається ", "answer": " Кропива"}]}';
const obj = JSON.parse(puzzleSimple);

let level = document.getElementById("level");
let error = document.getElementById("error");
let qs = document.getElementById("qs");
let check = document.getElementById("chech");
let answer = document.getElementById("textQs");
let count = document.getElementById("count");

let reload = document.getElementById("reload");

error.hidden = true;
reload.hidden = true;

level.innerHTML = "Рівень: Звичайний";

let counter = 3;
count.innerHTML = "Залишилося спроб: " + counter;

let length = obj.puzzle.length;

let number = Math.ceil(Math.random() * length);

qs.innerHTML = "Питання: " + obj.puzzle[number - 1].text;

check.addEventListener("click", function () {
  if (answer.value === "") {
    error.hidden = false;
    error.innerHTML = "Увага! Напишіть відповідь";
  } else if (
    answer.value.toLocaleLowerCase() ===
    obj.puzzle[number - 1].answer.toLocaleLowerCase()
  ) {
    error.hidden = false;
    error.innerHTML = "Оновлення через 3 секунди";

    setTimeout(() => {
      location.reload();
    }, 3000);

  } else {
    if (counter == 0) {
      alert("Гра завершина");
    } else {
      counter--;
      count.innerHTML = "Залишилося спроб: " + counter;

      if (counter == 0) {
        error.hidden = false;
        error.innerHTML = "Гра завершина";

        reload.hidden = false
        check.disabled = true 
      }
    }
  }
});

reload.addEventListener('click', () => { 
    location.reload();
});


