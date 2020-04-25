var nun, exponente, resultado, seis, cinco, dos, menosuno;

nun = prompt("Ingrese un numero");

seis = Math.pow(nun, 6);
document.write(
  "La potencia del numero: " + nun + " a la 6 es: " + seis + "<br>"
);
cinco = Math.pow(nun, 5);
document.write(
  "La potencia del numero: " + nun + " a la 5 es: " + cinco + "<br>"
);
dos = Math.pow(nun, 2);
document.write(
  "La potencia del numero: " + nun + " a la 2 es: " + dos + "<br>"
);
menosuno = Math.pow(nun, -1);
document.write(
  "La potencia del numero: " + nun + " a la -1 es: " + menosuno + "<br>"
);

function miFuncion() {
  exponente = prompt("Ingrese el exponente");
  resultado = Math.pow(nun, exponente);

  document.getElementById("expo").innerHTML =
    "La potencia del numero: " +
    nun +
    " a la " +
    exponente +
    " es: " +
    resultado +
    "<br>";
}