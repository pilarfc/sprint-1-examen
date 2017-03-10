var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes

  return estudiantes;
}


function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var nombre = prompt("Ingresa el nombre del alumno:");
    var puntosTecnicos = prompt ("Ingresa el puntaje técnico:");
    var puntosHSE = prompt ("Ingresa los puntos HSE:");

    var alumno = {
         nombre : nombre,
         puntosTecnicos: puntosTecnicos,
         puntosHSE: puntosHSE
   }
       estudiantes.push(alumno);
       return alumno;
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

    var busqueda = "";

  estudiantes.forEach(function(estudianteMostrado) {
    busqueda += mostrar(estudianteMostrado)
  });
   return busqueda;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    var estudiantesFiltrados = estudiantes.filter(function(estudiantePorBuscar) {
      return estudiantePorBuscar.nombre.toLowerCase() == nombre.toLowerCase();
    });

 return estudiantesFiltrados;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

 var filtroTecnicos = estudiantes.sort(function(alumnoA, alumnoB) {
  return alumnoB.puntosTecnicos - alumnoA.puntosTecnicos;
});
  return filtroTecnicos;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var filtroHSE = estudiantes.sort(function(alumnoA, alumnoB) {
     return alumnoB.puntosHSE - alumnoA.puntosHSE;
    });
     return filtroHSE;
}
