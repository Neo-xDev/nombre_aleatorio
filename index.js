function generarNombres() {
    const input = document.getElementById("nombres").value;
    const cantidad = parseInt(document.getElementById("cantidadNombres").value);

    // Validar que la cantidad sea positiva
    if (cantidad <= 0) {
        document.getElementById("result").innerText = "Por favor, ingresa un número válido de nombres a seleccionar.";
        return;
    }

    // Separar los nombres y filtrar
    const listaNombres = input.split('\n').map(nombre => nombre.trim()).filter(Boolean);

    // Verificar cantidad suficiente
    if (listaNombres.length < cantidad) {
        document.getElementById("result").innerText = `Por favor, ingresa al menos ${cantidad} nombres.`;
        return;
    }

    // Mezclar y seleccionar nombres aleatorios
    nombresAleatorios = listaNombres.sort(() => 0.5 - Math.random()).slice(0, cantidad).sort();

    const nombresRestantes = listaNombres.filter(nombre => !nombresAleatorios.includes(nombre)).sort();

    // Mostrar resultados
    document.getElementById("result").innerHTML = `<h2>Nombres seleccionados:</h2><ol>${nombresAleatorios.map(nombre => `<li>${nombre}</li>`).join('')}</ol>`;
    document.getElementById("nombresRestantes").value = nombresRestantes.join('\n');
}

