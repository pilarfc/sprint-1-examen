var estudiantes = []; // Este se vuelve un arreglo de objetos, es por ello que podemos acceder a sus propiedades desde cualquier función. 

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes

  return estudiantes;
}

function Estudiante (nombre, puntosTecnicos, puntosHSE) { // Las funciones constructoras siempre deben de llevar mayuscculas
  this.nombre = nombre;
  this.puntosTecnicos = puntosTecnicos;
  this.puntosHSE = puntosHSE;
};


function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado


      var nombre = prompt("Ingresa el nombre completo del estudiante:");
      var puntosTecnicos = prompt ("Ingresa los puntos técnicos obtenidos:");
      var puntosHSE = prompt ("Ingresa los puntos HSE obtenidos:");


    /*  function Estudiante (nombre, puntosTecnicos, puntosHSE) { // Las funciones constructoras siempre deben de llevar mayuscculas
        this.nombre = nombre;
        this.puntosTecnicos = puntosTecnicos;
        this.puntosHSE = puntosHSE;  // Esta funciòn se saca de esta funcion porque si en un futuro queremos reutilizar Estudiante no vamos a poder acceder a el.
      }; */

        var alumno = new Estudiante (nombre, puntosTecnicos, puntosHSE);
        estudiantes.push(alumno);
        return alumno;

/* OTRA FORMA DE HACERLO CON OBJETO LITERAL:

 var alumno = {
      nombre : nombre,
      puntosTecnicos: puntosTecnicos,
      puntosHSE: puntosHSE
}

    estudiantes.push(alumno);
    return alumno;

*/

}


function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";  // Aqui va punto en estudiante
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>"; // Aquí va punto en estudiante
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>"; // Aquí va punto en estudiante
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;

}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

   /* Otra  forma de hacer esto:

   var resultado = "";
   for (var i = 0; i < estudiantes.length ; i++) {
   resultado += mostrar(estudiantes[i]); // Esto es igual a resultado = resultado + mostrar(estudiantes[i]);
   // La concatenacion se hace por que si no le ponemos el + solo nos muestra el resultado del ultimo almno, y con el + se hace un ciclo donde nos va a mostrar todos los alumnos.
 }

 // Este for each podemos utilizarlo en vez del for, es otra manera de hacerlo:

 estudiantes.forEach(function(parametro)) {
  resultado += mostrar (parametro)
})

 return resultado;
  */

      var resultado = ""; // Es un string vacío y a este string vacío se le agrega el html
      var largo = estudiantes.length;
    for (var indice = 0; indice < largo; indice++){

      resultado += "<div class='row'>";
      resultado += "<div class='col m12'>";
      resultado += "<div class='card blue-grey darken-1'>";
      resultado += "<div class='card-content white-text'>";
      resultado += "<p><strong>Nombre:</strong> " + estudiantes[indice].nombre + "</p>";  // Aqui va punto en estudiante
      resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiantes[indice].puntosTecnicos + "</p>"; // Aquí va punto en estudiante
      resultado += "<p><strong>Puntos HSE:</strong> " + estudiantes[indice].puntosHSE + "</p>"; // Aquí va punto en estudiante
      resultado += "</div>";
      resultado += "</div>";
      resultado += "</div>";
      resultado += "</div>";
    }
       return resultado;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

/* Otra manera de hacerlo:
  var estudiantesFiltrados = estudiantes.filter(function(alumnosBuscados) {
  return alumnosBuscados.nombre.toLowerCase() == nombre.toLowerCase(); El segundo nombre es el que ingresa el usuario con prompt.
})
return estudiantesFiltrados;

 */

  nombre = nombre.toUpperCase();
  var buscador = [];

  for (var i = 0; i <estudiantes.length; i++) {
    if (nombre == estudiantes[i].nombre) {
      buscador.push(estudiantes[i]);
    }
  }
   return buscador;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

      var ordenadoTecnico = estudiantes.sort (function(alumnoA, alumnoB) {
        return alumnoB.puntosTecnicos - alumnoA.puntosTecnicos;
      });
      return ordenadoTecnico;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var ordenadoHSE = estudiantes.sort (function(alumnoA, alumnoB) {
      return alumnoB.puntosHSE - alumnoA.puntosHSE;
    });

    return ordenadoHSE;

}
