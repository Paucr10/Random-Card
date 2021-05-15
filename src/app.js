/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var arr = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let element = Math.floor(Math.random() * arr.length);
  let number = arr[element];
  var symbol = ["&hearts;", "&spades;", "&clubs;", "&diams;"];
  let symbolNumber = Math.floor(Math.random() * symbol.length);
  let NewSymbol = symbol[symbolNumber];

  let changeNumber = document.getElementById("sizeNumber");
  changeNumber.innerHTML = number;
  let changeSymbol_top = document.getElementById("symbol-top");
  let changeSymbol_botton = document.getElementById("symbol-botton");

  if (NewSymbol == "&spades;" || NewSymbol == "&clubs;") {
    changeSymbol_botton.style.color = "black";
    changeSymbol_top.style.color = "black";

    changeSymbol_botton.innerHTML = NewSymbol;
    changeSymbol_top.innerHTML = NewSymbol;
  } else if (NewSymbol == "&hearts;" || NewSymbol == "&diams;") {
    changeSymbol_botton.style.color = "red";
    changeSymbol_top.style.color = "red";

    changeSymbol_botton.innerHTML = NewSymbol;
    changeSymbol_top.innerHTML = NewSymbol;
  }
};
