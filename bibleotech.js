let cantidadUsuarios = parseInt(prompt("Ingrese la cantidad de usuarios que realizarán devoluciones hoy:"));

let totalLibros = 0;
let librosConRetraso = 0;
let librosPuntuales = 0;
let totalMultas = 0;

for (let i = 1; i <= cantidadUsuarios; i++) {

  let nombreUsuario = prompt("Ingrese el nombre del usuario " + i + ":");

  let cantidadLibros = parseInt(prompt("¿Cuántos libros devuelve " + nombreUsuario + "? (máximo 3)"));

  while (cantidadLibros < 1 || cantidadLibros > 3) {
    cantidadLibros = parseInt(prompt("ERROR. Ingrese un número válido entre 1 y 3 libros:"));
  }

  console.log("----- USUARIO " + i + " -----");
  console.log("Nombre:", nombreUsuario);

  let multaTotal = 0;

  for (let j = 1; j <= cantidadLibros; j++) {

    let diasPrestamo = parseInt(prompt("¿Cuántos días tuvo el libro " + j + "?"));

    let diasRetraso = diasPrestamo > 7 ? diasPrestamo - 7 : 0;

    let multa = 0;
    if (diasRetraso === 0) {
      multa = 0;
    } else if (diasRetraso <= 15) {
      multa = diasRetraso * 1500;
    } else {
      multa = (diasRetraso * 1500) + 10000;
    }

    console.log("Libro " + j + ": Días de préstamo = " + diasPrestamo +
                ", Días de retraso = " + diasRetraso +
                ", Multa = $" + multa);

    totalLibros += 1;
    if (diasRetraso === 0) {
      librosPuntuales += 1;
    } else {
      librosConRetraso += 1;
    }

    multaTotal += multa;
  }

  let clasificacion = (multaTotal === 0) ? "PUNTUAL" : "CON RETRASO";
  console.log("Multa total del usuario: $" + multaTotal + " — " + clasificacion);

  totalMultas += multaTotal;
}

console.log("=== RESUMEN BIBLIOTECH ===");
console.log("Usuarios atendidos:", cantidadUsuarios);
console.log("Total de libros devueltos:", totalLibros);
console.log("Libros puntuales:", librosPuntuales);
console.log("Libros con retraso:", librosConRetraso);
console.log("MULTAS RECAUDADAS: $" + totalMultas);