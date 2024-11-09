function elegirMenu() {
    // Solicitar el número del primer plato al usuario
    const primerPlatoNum = prompt("Indique el número del primer plato (1 a 5):");
    const segundoPlatoNum = prompt("Indique el número del segundo plato (1 a 5):");

    // Convertir el número ingresado al nombre del plato
    const primerosPlatos = ["Ensalada Mixta", "Sopa de Verduras", "Gazpacho", "Melón con Jamón", "Crema de Calabaza"];
    const segundosPlatos = ["Pollo Asado", "Merluza a la Plancha", "Filete de Ternera", "Macarrones al Pesto", "Lasaña Vegetal"];

    // Obtener los platos seleccionados, restando 1 al índice para acceder correctamente al array
    const primerPlato = primerosPlatos[primerPlatoNum - 1];
    const segundoPlato = segundosPlatos[segundoPlatoNum - 1];

    // Comprobar que las opciones elegidas son válidas
    if (primerPlato && segundoPlato) {
        alert(`Ha elegido de primer plato ${primerPlato} y de segundo plato ${segundoPlato}.`);
    } else {
        alert("Uno o ambos números ingresados son inválidos. Por favor, elija un número entre 1 y 5 para cada plato.");
    }
}