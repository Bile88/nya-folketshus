// Hämta knapparna som öppnar modalen
var memberBtns = document.getElementsByClassName("member-btn");

// Hämta modal-elementet
var modal = document.getElementById("rulesModal");

// Hämta span-elementet som stänger modalen
var span = document.getElementsByClassName("close")[0];

// Hämta knappen "Fortsätt"
var continueBtn = document.getElementById("continueBtn");

// När någon klickar på en knapp, öppna modalen
for (var i = 0; i < memberBtns.length; i++) {
  memberBtns[i].onclick = function() {
    modal.style.display = "block";
  }
}

// När någon klickar på span-elementet (x), stäng modalen
span.onclick = function() {
  modal.style.display = "none";
}

// När någon klickar utanför modalen, stäng den
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Hantera klick på "Fortsätt"-knappen
continueBtn.onclick = function() {
  // Här kan du lägga in logik för att gå vidare till nästa steg
  // t.ex. navigera till en ny sida eller visa ett nytt modalt fönster
  alert("Du kommer nu att bli omdirigerad till ansökningsformuläret.");
  modal.style.display = "none"; // Stäng modalen
}