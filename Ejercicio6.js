var num, loto, game;
document.write();

function miFuncion() {
  num = prompt("¿A que numero apuestas? entre 0 y 99");
  loto = Math.floor(Math.random() * 2);
  if (loto == num) {
    document.getElementById("game").innerHTML =
      "Enhorabuena!!!!" + "<br>" + "HAS GANADO!!!!!";
  } else {
    document.getElementById("game").innerHTML =
      "Lo sentimos mucho pero no has ganado " + "<br>";
  }
  document.getElementById("game2").innerHTML =
    "Numero Ganador-----> " + loto + " Tu numero -----> " + num;
  num;
}