var Carta1 = {
  Palos: "c",
  valor: 3
};
var Carta2 = {
  Palos: "p",
  valor: 1
};
var Carta3 = {
  Palos: "t",
  valor: 12
};
var Carta4 = {
  Palos: "d",
  valor: 8
};
var Carta5 = {
  Palos: "c",
  valor: 3
};
var Carta6 = {
  Palos: "p",
  valor: 1
};
var Carta7 = {
  Palos: "t",
  valor: 12
};
var Carta8 = {
  Palos: "d",
  valor: 8
};
var mano = [Carta1, Carta2, Carta3, Carta4];
var mano2 = [Carta5, Carta6, Carta7, Carta8];
document.write('El jugador 1 tiene un total de ')
document.write(Puntuar(mano));
document.write(' puntos Sumando doble las cartas rojas<br>')
document.write(' El jugador 2 tiene un total de ')
document.write(Puntuar(mano2));
document.write(' puntos Sumando doble las cartas rojas')

function Puntuar(mano) {
  var resultado = 0;
  for (let i = 0; i < mano.length; i++) {
    if (mano[i].Palos == "c" || mano[i].Palos == "d")
      mano[i].valor *= 2;

    if (mano[i].valor == 1) {
      resultado += 20;
    } else {
      resultado += mano[i].valor;
    }
  }
  return resultado;
}


if (Puntuar(mano) > Puntuar(mano2)) {
  document.write('<br>' + 'El Jugador 1 Gana la mano');

} else if (Puntuar(mano) < Puntuar(mano2)) {
  document.write('<br>' + 'El jugador 2 gana la mano');

} else document.write('<br>' + 'Empate');