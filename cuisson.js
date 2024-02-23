oven = 1

function addCanelé() {
    canel = document.getElementById("nb_canele");
    num_can = parseInt(canel.innerText);
    canel.innerText = num_can + oven;
    enableOven();
}

function addOven() {
    canel = document.getElementById("nb_canele");
    num_can = parseInt(canel.innerText);
    canel.innerText = num_can - 25;
    oven++;
    enableOven();
}

function enableOven() {
    canel = document.getElementById("nb_canele");
    ovenButton = document.getElementById("ovenButton");
    num_can = parseInt(canel.innerText);
    if (num_can >= 25) {
        ovenButton.disabled = false;
    } else {
        ovenButton.disabled = true;
    }
}
