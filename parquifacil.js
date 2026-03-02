let opcionMenu = 0;

let tarifaMoto = 2000;
let tarifaCarro = 4000;
let tarifaCamioneta = 6000;

let contMotos = 0;
let contCarros = 0;
let contCamionetas = 0;

let ingresoTotal = 0;
let sumaHoras = 0;

while (opcionMenu !== 2) {
  opcionMenu = parseInt(prompt(
    "Bienvenido a Parquífacil. Seleccione una opción:\n" +
    "1. Registrar vehículo\n" +
    "2. Cerrar jornada"
  ));

  if (opcionMenu === 1) {
    let tipoVehiculo = parseInt(prompt(
      "Seleccione el tipo de vehículo:\n1. Moto\n2. Carro\n3. Camioneta"
    ));
    let tiempoPermanencia = parseFloat(prompt(
      "Ingrese el tiempo de permanencia en horas:"
    ));

    let tipoVehiculoTexto = "";
    let tarifaHora = 0;

    if (tipoVehiculo === 1) {
      tipoVehiculoTexto = "Moto";
      tarifaHora = tarifaMoto;
      contMotos++;
    } else if (tipoVehiculo === 2) {
      tipoVehiculoTexto = "Carro";
      tarifaHora = tarifaCarro;
      contCarros++;
    } else if (tipoVehiculo === 3) {
      tipoVehiculoTexto = "Camioneta";
      tarifaHora = tarifaCamioneta;
      contCamionetas++;
    } else {
      alert("Tipo de vehículo no válido. Por favor, seleccione 1, 2 o 3.");
      continue;
    }

    let costoTotal = tarifaHora * tiempoPermanencia;
    let descuento = 0;
    if (tiempoPermanencia >= 8) {
      descuento = costoTotal * 0.20;
    }
    let totalPagar = costoTotal - descuento;

    ingresoTotal += totalPagar;
    sumaHoras += tiempoPermanencia;

    let tipoDeTarifa = (descuento > 0) ? "Tarifa con descuento" : "Tarifa normal";

    console.log("--- VEHÍCULO REGISTRADO ---");
    console.log("Tipo: " + tipoVehiculoTexto);
    console.log("Horas: " + tiempoPermanencia);
    console.log("Tarifa por hora: $" + tarifaHora);
    console.log("Subtotal: $" + costoTotal);
    if (descuento > 0) console.log("Descuento aplicado: $" + descuento);
    console.log("Total a pagar: $" + totalPagar);
    console.log("Tipo de tarifa aplicada: " + tipoDeTarifa);
    console.log("---------------------------");

  } else if (opcionMenu === 2) {

    let totalVehiculos = contMotos + contCarros + contCamionetas;
    let promedioHoras = totalVehiculos > 0 ? sumaHoras / totalVehiculos : 0;

    console.log("=== CIERRE DE JORNADA ===");
    console.log("Motos: " + contMotos + " | Carros: " + contCarros + " | Camionetas: " + contCamionetas);
    console.log("Total vehículos: " + totalVehiculos);
    console.log("Ingreso total: $" + ingresoTotal);
    console.log("Promedio de horas de permanencia: " + promedioHoras.toFixed(2) + " horas");
    console.log("==========================");
  } else {
    alert("Opción inválida, ingrese 1 o 2");
  }
}