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
var mano = [Carta1, Carta2, Carta3, Carta4];
document.write(' La mano tiene un total de ')
document.write(Puntuar(mano));
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