var radio, area, circunferencia, diametro;
radio = prompt("Introduza el valor del radio");
5
volumen = ((4 / 3) * Math.PI * (Math.pow(radio, 2)));
circunferencia = (2 * Math.PI * radio);
area = Math.PI * radio * radio;










function circunfe() {
  document.getElementById("Circulo").innerHTML = document.write('<a href="Ejercicio7.html"><img width= "200px" src="img/Circunferencia.png"/></a>' + "<br>" + "La circunferencia del circulo es: " +
    circunferencia.toFixed(2))
}

function are() {
  document.getElementById("Area").innerHTML = document.write('<a href="Ejercicio7.html"><img width= "200px" src="img/area.png"/></a>' + "<br>" + "El area del circulo es: " +
    area.toFixed(2));
}

function volum() {
  document.getElementById("Volumen").innerHTML = document.write('<a href="Ejercicio7.html"><img width= "200px" src="img/Esfera.png"/></a>' + "<br>" + "El Volumen del circulo es: " + volumen.toFixed(2));
}



function All() {
  document.getElementById("Circulo").innerHTML = document.write('<a href="Ejercicio7.html"><img width= "200px" src="img/Circunferencia.png"/></a>' + "<br>" + "La circunferencia del circulo es: " + circunferencia.toFixed(2) + "<br>" +
    '<a href="Ejercicio7.html"><img width= "200px" src="img/area.png"/></a>' + "<br>" + "El area del circulo es: " + area.toFixed(2) + "<br>" +
    '<a href="Ejercicio7.html"><img width= "200px" src="img/Esfera.png"/></a>' + "<br>" + "El Volumen del circulo es: " + volumen.toFixed(2)) + "<br>";
}