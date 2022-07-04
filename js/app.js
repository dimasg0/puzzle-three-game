let start_btn = document.getElementById('start');

/*
  var sel=document.getElementById('mySelect').selectedIndex;
  var options=document.getElementById('mySelect').options;
  alert('Выбрана опция '+options[sel].text+' '+options[sel].value);
 */
let levels = 0;

start_btn.addEventListener("click", () => {
    let levelChange = document.getElementById('level-change').selectedIndex
    var options= document.getElementById('level-change').options;

    sessionStorage.setItem('testName', options[levelChange].value); 

    document.location.href = "/html/game.html"
})
