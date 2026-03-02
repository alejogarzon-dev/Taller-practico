let cantidadPersonas = parseInt(prompt("Ingrese cuántas personas va a registrar hoy:"));
let salarioMinimo = 1300000;
let contAdultosMayores = 0; 
let contAdultosMayoresSenior = 0;
let contNoAplica = 0;

for (let i = 1; i <= cantidadPersonas; i++) {
    let nombrePersona = prompt("Ingrese el nombre completo de la persona " + i + ":");
    let edadPersona = parseInt(prompt("Ingrese la edad de " + nombrePersona + ":"));
    let subsidio = 0;

    if (edadPersona >= 60 && edadPersona <= 80) {
        subsidio = salarioMinimo * 0.12;
        contAdultosMayores++;
        console.log(`La persona ${nombrePersona} tiene derecho a un subsidio de: $${subsidio.toLocaleString()}`);
    } else if (edadPersona > 80) {
        subsidio = salarioMinimo * 0.15;
        contAdultosMayoresSenior++;
        console.log(`La persona ${nombrePersona} tiene derecho a un subsidio de: $${subsidio.toLocaleString()}`);
    } else {
        contNoAplica++;
        console.log(`La persona ${nombrePersona} no aplica al subsidio`);
    }

    let categoria = (edadPersona >= 60 && edadPersona <= 80) ? "Adulto Mayor" : 
    (edadPersona > 80) ? "Adulto Mayor Senior" : "No aplica";
    console.log(`Categoría de ${nombrePersona}: ${categoria}`);
    console.log("---------------------------");
}

let montoTotalSubsidio = (contAdultosMayores * (salarioMinimo * 0.12)) + 
(contAdultosMayoresSenior * (salarioMinimo * 0.15));

console.log("=== RESUMEN DE SUBSIDIOS ===");
console.log("Total de personas registradas:", cantidadPersonas);
console.log("Número de adultos mayores (60-80 años):", contAdultosMayores);
console.log("Número de adultos mayores senior (>80 años):", contAdultosMayoresSenior);
console.log("Número de personas que no aplican al subsidio:", contNoAplica);
console.log("Monto total destinado a subsidios: $", montoTotalSubsidio.toLocaleString());
