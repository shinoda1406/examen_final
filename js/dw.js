function calcularTriangulo() {
    const ladoA = parseFloat(document.getElementById("ladoA").value);
    const ladoB = parseFloat(document.getElementById("ladoB").value);
    const ladoC = parseFloat(document.getElementById("ladoC").value);

    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        alert("Por favor, ingresa valores válidos para los lados.");
        return;
    }

    if (ladoA + ladoB <= ladoC || ladoA + ladoC <= ladoB || ladoB + ladoC <= ladoA) {
        alert("Los lados ingresados no forman un triángulo válido.");
        return;
    }

    const resultados = document.getElementById("resultados");
    resultados.innerHTML = "";

    // Perímetro
    const perimetro = ladoA + ladoB + ladoC;

    // Semiperímetro
    const semiperimetro = perimetro / 2;

    // Área (Fórmula de Herón)
    const area = Math.sqrt(
        semiperimetro *
        (semiperimetro - ladoA) *
        (semiperimetro - ladoB) *
        (semiperimetro - ladoC)
    );

    // Cálculo de los ángulos (Ley de los cosenos)
    const anguloA = Math.acos(
        (Math.pow(ladoB, 2) + Math.pow(ladoC, 2) - Math.pow(ladoA, 2)) /
        (2 * ladoB * ladoC)
    ) * (180 / Math.PI);

    const anguloB = Math.acos(
        (Math.pow(ladoA, 2) + Math.pow(ladoC, 2) - Math.pow(ladoB, 2)) /
        (2 * ladoA * ladoC)
    ) * (180 / Math.PI);

    const anguloC = 180 - anguloA - anguloB;

    // Cálculo de las medianas
    const medianaA = 0.5 * Math.sqrt(
        2 * Math.pow(ladoB, 2) + 2 * Math.pow(ladoC, 2) - Math.pow(ladoA, 2)
    );
    const medianaB = 0.5 * Math.sqrt(
        2 * Math.pow(ladoA, 2) + 2 * Math.pow(ladoC, 2) - Math.pow(ladoB, 2)
    );
    const medianaC = 0.5 * Math.sqrt(
        2 * Math.pow(ladoA, 2) + 2 * Math.pow(ladoB, 2) - Math.pow(ladoC, 2)
    );

    // Cálculo de las alturas
    const alturaA = (2 * area) / ladoA;
    const alturaB = (2 * area) / ladoB;
    const alturaC = (2 * area) / ladoC;

    // Cálculo de las bisectrices
    const bisectrizA =
        (2 / (ladoB + ladoC)) *
        Math.sqrt(ladoB * ladoC * semiperimetro * (semiperimetro - ladoA));
    const bisectrizB =
        (2 / (ladoA + ladoC)) *
        Math.sqrt(ladoA * ladoC * semiperimetro * (semiperimetro - ladoB));
    const bisectrizC =
        (2 / (ladoA + ladoB)) *
        Math.sqrt(ladoA * ladoB * semiperimetro * (semiperimetro - ladoC));

    // Mostrar resultados
    resultados.innerHTML = `
        <div class="result-block">
            <h3>Resultados:</h3>
            <p><strong>Perímetro:</strong> ${perimetro.toFixed(2)}</p>
            <p><strong>Área:</strong> ${area.toFixed(2)}</p>
            <br>
            <p><strong>Ángulos:</strong></p>
            <ul>
                <li>Ángulo A: ${anguloA.toFixed(2)}°</li>
                <li>Ángulo B: ${anguloB.toFixed(2)}°</li>
                <li>Ángulo C: ${anguloC.toFixed(2)}°</li>
            </ul>
            <p><strong>Alturas:</strong></p>
            <ul>
                <li>Altura A: ${alturaA.toFixed(2)}</li>
                <li>Altura B: ${alturaB.toFixed(2)}</li>
                <li>Altura C: ${alturaC.toFixed(2)}</li>
            </ul>
            <p><strong>Medianas:</strong></p>
            <ul>
                <li>Mediana A: ${medianaA.toFixed(2)}</li>
                <li>Mediana B: ${medianaB.toFixed(2)}</li>
                <li>Mediana C: ${medianaC.toFixed(2)}</li>
            </ul>
            <p><strong>Bisectrices:</strong></p>
            <ul>
                <li>Bisectriz A: ${bisectrizA.toFixed(2)}</li>
                <li>Bisectriz B: ${bisectrizB.toFixed(2)}</li>
                <li>Bisectriz C: ${bisectrizC.toFixed(2)}</li>
            </ul>
        </div>
    `;
}
