
let poopBoolToday = false;
let date = new Date();
function dateChecker(){
    return date.getDate();
}

function hideButtons(){
    document.getElementById("buttonYes").style.visibility = 'hidden';
    document.getElementById("buttonNo").style.visibility = 'hidden';
}

function yesPoop() {
    document.getElementById("main-text").innerHTML = 'Молодець!';
    document.getElementById("body").style.backgroundColor = '#964B00';
    poopBoolToday = true;
    localStorage.setItem('poop', poopBoolToday.toString());
    hideButtons();
    localStorage.setItem('date', date.getDate().toString());
}

function noPoop() {
    document.getElementById("main-text").innerHTML = 'Шкода... Приходь коли покакаєш';
    document.getElementById("body").style.backgroundColor = 'white';
    poopBoolToday = false;
    hideButtons();
    localStorage.setItem('poop', poopBoolToday.toString());
}

function resetPoop(){
    poopBoolToday = null;
    localStorage.clear();
    console.log('Local storage reseted');
}

document.addEventListener("DOMContentLoaded", function() {
    const raw = localStorage.getItem('poop');
    const outputRaw = JSON.parse(raw);
    const rawDate = localStorage.getItem('date');
    const outputRawDate = JSON.parse(rawDate);
    if (outputRawDate !== dateChecker()){
        resetPoop();
    }
    else if (outputRaw === true){
        yesPoop();
    } else if (outputRaw === false) {
        noPoop();
    }
    console.log(outputRaw);
    console.log(outputRawDate);
    console.log(dateChecker());
});
