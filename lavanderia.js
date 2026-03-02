
let cantidadClientes = parseInt(prompt("Ingrese la cantidad de clientes que va a registrar hoy:"));

let ingresosTotales = 0;
let clientesConDescuento = 0;

for (let i = 1; i <= cantidadClientes; i++) {
    
    let nombreCliente = prompt("Ingrese el nombre del cliente " + i + ":");
    let cantidadHoras = parseInt(prompt(`¿Cuántas horas va a alquilar la lavadora ${nombreCliente}?`));

    let costoTotal = cantidadHoras * 5000;

    let descuento = 0;
    if (cantidadHoras > 12) {
        descuento = costoTotal * 0.30;
        clientesConDescuento++;
    }

    let totalPagar = costoTotal - descuento;

    let tipoDeTarifa = (descuento > 0) ? "CON DESCUENTO" : "SIN DESCUENTO";

    console.log(`--- CLIENTE ${i}: ${nombreCliente} ---`);
    console.log(`Horas alquiladas: ${cantidadHoras}`);
    console.log(`Costo total sin descuento: $${costoTotal.toLocaleString()}`);
    console.log(`Valor del descuento: $${descuento.toLocaleString()}`);
    console.log(`Total a pagar: $${totalPagar.toLocaleString()} (${tipoDeTarifa})`);
    console.log("---------------------------");

    ingresosTotales += totalPagar;
}
console.log("=== RESUMEN DEL DÍA ===");
console.log(`Clientes atendidos: ${cantidadClientes}`);
console.log(`Ingreso total del día: $${ingresosTotales.toLocaleString()}`);
console.log(`Clientes con descuento: ${clientesConDescuento}`);