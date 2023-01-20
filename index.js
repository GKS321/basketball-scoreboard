let hsc = 0
let gsc = 0
let hs = document.getElementById("hScore")
let gs = document.getElementById("gScore")

function hOne() {
    hsc += 1
    hs.textContent = hsc
}

function hTwo() {
    hsc += 2
    hs.textContent = hsc
}

function hThree() {
    hsc += 3
    hs.textContent = hsc
}

function gOne() {
    gsc += 1
    gs.textContent = gsc
}

function gTwo() {
    gsc += 2
    gs.textContent = gsc
}

function gThree() {
    gsc += 3
    gs.textContent = gsc
}

function End() {
    if(hsc==gsc)
        alert("Game ends in a DRAW!!!")
    else if(hsc>gsc)
        alert("Home Team has Won!!!")
    else
        alert("Guest Team has Won!!!")
    hsc = 0
    gsc = 0
    hs.textContent = hsc
    gs.textContent = gsc
}

function New() {
    hsc = 0
    gsc = 0
    hs.textContent = hsc
    gs.textContent = gsc
    alert("Values resetted for New Game!")
}