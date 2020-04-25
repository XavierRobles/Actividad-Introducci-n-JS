var fecha = new Date();

mes = fecha.getMonth() + 1;
if (mes > 0 && mes <= 12) {
  document.write(
    "La fecha actual es " +
    fecha.toLocaleDateString() +
    "<br>" +
    "El mes " +
    mes +
    " pertenece al "
  );
}

if (mes <= 3) {
  document.write(
    "Primer trimestre del año comprendido entre el mes 1 mes 2 y mes 3"
  );
} else if (mes <= 6) {
  document.write(
    "Segundo trimestre del año comprendido entre el mes 4 mes 5 y mes 6"
  );
} else if (mes <= 9) {
  document.write(
    "Tercer trimestre del año comprendido entre el mes 7 mes 8 y mes 9"
  );
} else if (mes <= 12) {
  document.write(
    "Cuarto trimestre del año comprendido entre el mes 10 mes 11 y mes 12"
  );
} else
  document.write("El sistema tiene la fecha mal, Numero de mes incorrecto");