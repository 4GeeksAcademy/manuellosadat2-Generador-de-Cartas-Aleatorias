import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let num = ["A","1","2","3","4","5","6","7","8","9","10","J", "Q", "K"];
    let cards = ["Hearts","Diamonds","Clubs","Spades"];


    let randomNum = Math.floor(Math.random() * num.length)
    let randomCards = Math.floor(Math.random() * cards.length)

    let cardsResult = cards[randomCards];

    document.getElementById(`content`).innerHTML= num[randomNum]
    document.getElementById('theCard').className = "";
    document.getElementById(`theCard`).classList.add("card");
    document.getElementById(`theCard`).classList.add(getCardsClass(cardsResult))

    function getCardsClass (cards){
        switch(cards){
            case "Hearts": return "cards-hearts";
            case "Diamonds": return "cards-diamonds";
            case "Clubs": return "cards-clubs";
            case "Spades": return "cards-spades";
        }
    }
};
