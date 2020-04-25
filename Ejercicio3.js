// var d = new Date();

// document.write('Fecha: '+d.getDate(),
// '<br>Dia de la semana: '+d.getDay(),'<br>Mes (0 al 11): '+d.getMonth(),
// '<br>Año:'+d.getFullYear(),'<br>Hora:'+d.getHours(),'<br>HoraUTC: '+d.getUTCHours()+2,'<br>Minutos:'+d.getMinutes(),
// ' <br>Segundos: '+d.getSeconds());

var hoy = new Date();

document.write(
  "La fecha de hoy es " + hoy.toLocaleDateString(),
  "<br>" + "La hora actual es " + hoy.toLocaleTimeString()
);