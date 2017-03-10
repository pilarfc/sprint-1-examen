var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var nombre = prompt("Ingresa el Nombre");
    var inicioMayuscula = nombre.slice(0,1);
    inicioMayuscula = inicioMayuscula.toUpperCase();
    nombre = inicioMayuscula + nombre.slice(1).toLowerCase();
    var puntosTecnicos = prompt("Ingresa los puntos técnicos");
    puntosTecnicos = Number(puntosTecnicos);
    var puntosHse = prompt("Ingresa los puntos HSE");
    puntosHse = Number(puntosHse);

    var estudiante = {
      nombre: nombre,
      puntosTecnicos: puntosTecnicos,
      puntosHse: puntosHse
    };

    estudiantes.push(estudiante);

    return estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var lista = ""
    for (var i = 0, limite =estudiantes.length; i < limite; i++) {
        lista+= mostrar(estudiantes[i]);
    }

    return lista;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    var inicio = nombre.slice(0,1); 
  var inicioMayuscula = nombre.slice(0,1);
    inicioMayuscula = inicioMayuscula.toUpperCase();
    nombre = inicioMayuscula + nombre.slice(1).toLowerCase();
    var encontrado = [];

    for (var i = 0, limite = estudiantes.length; i <limite ; i++) {
      if (estudiantes[i].nombre == nombre){
        encontrado.push(estudiantes[i]);
        return encontrado; */
      }
  }
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    var ordenTecnico = estudiantes.sort(function(a, b){
      return a.puntosTecnicos < b.puntosTecnicos;
    });

    return ordenTecnico;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    var ordenHSE = estudiantes.sort(function(a,b){
      return a.puntosHse < b.puntosHse;
    });

    return ordenHSE;
}
