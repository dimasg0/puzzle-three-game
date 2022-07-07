let start_btn = document.getElementById('start');

start_btn.addEventListener("click", () => {
    let levelChange = document.getElementById('level-change').selectedIndex
    var options= document.getElementById('level-change').options;

    sessionStorage.setItem('testName', options[levelChange].value); 

    document.location.href = "/html/splash.html"
})

