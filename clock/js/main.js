"use strict"
//http://jsfiddle.net/schawaska/37fLF/4/
var btn = document.getElementById("interval");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var timeN;


function showTextInId(id, text) {
    document.getElementById(id).innerHTML = text;
}


function showTime() {
    var now = moment(new Date());
    now = now.locale("ru").format('HH:mm:ss');
    timeN = now;
    showTextInId("time", now);
    setTimeout('showTime()', 1);
}

function interval() {

    // var player1Hand = getPlayerResult();
    // var player2Hand = getPlayerResult();
    // player1.innerHTML = getNameById(player1Hand);
    // player2.innerHTML = getNameById(player2Hand);

    // battle = String(player1Hand) + String(player2Hand);
    // printResult(getWiner(player1Hand, player2Hand));
    // showTextInId("result", timeN);

    document.getElementById("result").innerHTML += timeN + "<br>";
}

btn.addEventListener("click", interval);
