// VARIABLES
let puntuacion: number = 0;
let gameOver: boolean = false;

const puntos = document.getElementById('puntuacion');
const pedirCarta = document.getElementById('pedirCarta');
const imagenCarta = document.getElementById('carta');
const plantarseBtn = document.getElementById('plantarse');
const reiniciarBtn = document.getElementById('reiniciar');
const mensajeDiv = document.getElementById('mensaje');
const whatIfButton = document.getElementById('whatIfButton') as HTMLButtonElement; // Asumimos que el botón está en HTML

// Aseguramos que el botón "What If" esté oculto al inicio
whatIfButton.style.display = "none";

// FUNCIONES
// Mostrar puntuación
function mostrarPuntuacion(): void {
    if (puntos instanceof HTMLDivElement) {
        puntos.textContent = `Puntuación: ${puntuacion}`;
    } else {
        console.error("Elemento 'puntos' no es un HTMLDivElement");
    }
}

// CARTA ALEATORIA
function darCarta(): number {
    const randomNum = Math.floor(Math.random() * 10) + 1; // Número aleatorio entre 1 y 10
    return randomNum > 7 ? randomNum + 2 : randomNum; // Sumamos 2 si es mayor a 7 (sin 8 ni 9)
}

// MOSTRAR CARTA
const mostrarCarta = (carta: number): void => {
    if (imagenCarta instanceof HTMLImageElement) {
        let cartaSrc: string;
        switch (carta) {
            case 1: cartaSrc = "./src/images/1_as-copas.jpg"; break;
            case 2: cartaSrc = "./src/images/2_dos-copas.jpg"; break;
            case 3: cartaSrc = "./src/images/3_tres-copas.jpg"; break;
            case 4: cartaSrc = "./src/images/4_cuatro-copas.jpg"; break;
            case 5: cartaSrc = "./src/images/5_cinco-copas.jpg"; break;
            case 6: cartaSrc = "./src/images/6_seis-copas.jpg"; break;
            case 7: cartaSrc = "./src/images/7_siete-copas.jpg"; break;
            case 10: cartaSrc = "./src/images/10_sota-copas.jpg"; break;
            case 11: cartaSrc = "./src/images/11_caballo-copas.jpg"; break;
            case 12: cartaSrc = "./src/images/12_rey-copas.jpg"; break;
            default: cartaSrc = "./src/images/back.jpg";
        }
        imagenCarta.src = cartaSrc;
    } else {
        console.error("Elemento 'imagenCarta' no es un HTMLImageElement");
    }
}

// FUNCION PARA TERMINAR EL JUEGO
function terminarJuego(mensajeFinal: string): void {
    gameOver = true;

    if (pedirCarta instanceof HTMLButtonElement) pedirCarta.disabled = true;
    if (plantarseBtn instanceof HTMLButtonElement) plantarseBtn.disabled = true;
    if (mensajeDiv instanceof HTMLDivElement) mensajeDiv.textContent = mensajeFinal;
    if (reiniciarBtn instanceof HTMLButtonElement) reiniciarBtn.style.display = "inline";

    // Mostrar el botón "¿Qué habría pasado?"
    whatIfButton.style.display = "inline";
}

// LÓGICA DEL BOTÓN "Pedir Carta"
if (pedirCarta instanceof HTMLButtonElement) {
    pedirCarta.addEventListener('click', () => {
        const carta = darCarta();
        mostrarCarta(carta);

        // Sumar carta a la puntuación
        puntuacion += carta;

        // Verificar si se pasa de 7.5 puntos
        if (puntuacion > 7.5) {
            terminarJuego("¡Juego terminado, te has pasado de 7.5 puntos!");
        }

        mostrarPuntuacion();
    });
}

// LÓGICA DEL BOTÓN "Plantarse"
if (plantarseBtn instanceof HTMLButtonElement) {
    plantarseBtn.addEventListener('click', () => {
        if (!gameOver) {
            let mensajeFinal: string;

            if (puntuacion < 4) {
                mensajeFinal = "Has sido muy conservador.";
            } else if (puntuacion === 5) {
                mensajeFinal = "Te ha entrado el canguelo eh?";
            } else if (puntuacion === 6 || puntuacion === 7) {
                mensajeFinal = "Casi casi...";
            } else if (puntuacion === 7.5) {
                mensajeFinal = "¡Lo has clavado! ¡Enhorabuena!";
            } else {
                mensajeFinal = "Juego terminado.";
            }

            terminarJuego(mensajeFinal);

            // Habilitar el botón "¿Qué habría pasado?" después de plantarse
            if (whatIfButton instanceof HTMLButtonElement) {
                whatIfButton.disabled = false; // Habilitar el botón al plantarse
            }
        }
    });
}

// LÓGICA DEL BOTÓN "Reiniciar"
if (reiniciarBtn instanceof HTMLButtonElement) {
    reiniciarBtn.addEventListener('click', () => {
        puntuacion = 0;
        gameOver = false;

        if (pedirCarta instanceof HTMLButtonElement) pedirCarta.disabled = false;
        if (plantarseBtn instanceof HTMLButtonElement) plantarseBtn.disabled = false;
        if (mensajeDiv instanceof HTMLDivElement) mensajeDiv.textContent = "";
        if (imagenCarta instanceof HTMLImageElement) imagenCarta.src = "./src/images/back.jpg";
        reiniciarBtn.style.display = "none";

        // Ocultar botón "¿Qué habría pasado?"
        whatIfButton.style.display = "none";

        mostrarPuntuacion();
    });
}

// LÓGICA DEL BOTÓN "¿Qué habría pasado?"
whatIfButton.addEventListener('click', () => {
    if (gameOver) {
        const carta = darCarta();
        mostrarCarta(carta);
        puntuacion += carta;

        if (puntos instanceof HTMLDivElement) {
            puntos.textContent = `Simulación - Nueva Puntuación: ${puntuacion}`;
        }

        if (puntuacion > 7.5) {
            if (whatIfButton instanceof HTMLButtonElement) {
                whatIfButton.disabled = true; // Deshabilitar el botón después de la simulación
            }
            if (mensajeDiv instanceof HTMLDivElement) {
                mensajeDiv.textContent = "Te habrías pasado de 7.5 puntos.";
            }
        }
    }
});

// Mostrar puntuación al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    mostrarPuntuacion();
});
