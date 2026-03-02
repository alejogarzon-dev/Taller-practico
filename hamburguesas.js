let optionMenu = 0;
let total = 0;     
do {

    optionMenu = prompt(
        "--- Menú Burger Palace ---\n" +
        "1. Combo Clásica - $15.000\n" +
        "2. Combo Doble Poder - $22.000\n" +
        "3. Combo Mega Fest - $35.000\n" +
        "4. Finalizar pedido\n\n" +
        "Seleccione un combo (1-4):"
    );
    optionMenu = Number(optionMenu);

    if(optionMenu === 1) {
        let cantidadCombos = parseInt(prompt("¿Cuántos Combos Clásica deseas agregar?"));
        total += 15000 * cantidadCombos;
        alert("Agregaste " + cantidadCombos + " Combo(s) Clásica. Total acumulado: $" + total);
    } else if(optionMenu === 2) {
        let cantidadCombos = parseInt(prompt("¿Cuántos Combos Doble Poder deseas agregar?"));
        total += 22000 * cantidadCombos;
        alert("Agregaste " + cantidadCombos + " Combo(s) Doble Poder. Total acumulado: $" + total);
    } else if(optionMenu === 3) {
        let cantidadCombos = parseInt(prompt("¿Cuántos Combos Mega Fest deseas agregar?"));
        total += 35000 * cantidadCombos;
        alert("Agregaste " + cantidadCombos + " Combo(s) Mega Fest. Total acumulado: $" + total);
    } else if(optionMenu === 4) {
        alert("Pedido finalizado. Total a pagar: $" + total);
    }       else {
        alert("Opción no válida. Por favor, ingrese un número del 1 al 4.");
    }
    

} while(optionMenu !== 4);