// VARIABLES
let puntuacion: number = 0;
let gameOver: boolean = false;

const puntos = document.getElementById('puntuacion') as HTMLDivElement;
const pedirCarta = document.getElementById('pedirCarta') as HTMLButtonElement;
const imagenCarta = document.getElementById('carta') as HTMLImageElement;

const plantarseBtn = document.getElementById('plantarse') as HTMLButtonElement;
const reiniciarBtn = document.getElementById('reiniciar') as HTMLButtonElement;
const mensajeDiv = document.getElementById('mensaje') as HTMLDivElement;

// FUNCIONES
//MOSTRAR PUNTUACIÓN
function mostrarPuntuacion(): void {
    if (puntos) {
        puntos.textContent = `Puntuación: ${puntuacion}`;
    }
}

// CARTA ALEATORIA
function darCarta(): number {
    const randomNum = Math.floor(Math.random() * 10) + 1; // Número aleatorio entre 1 y 10
    return randomNum > 7 ? randomNum + 2 : randomNum; // Sumamos 2 si es mayor a 7 ya que no hay número 8 ni 9
}

// MOSTRAR CARTA
const mostrarCarta = (carta: number): void => {
  let cartaSrc: string;
    switch (carta) {
      case 1:
        cartaSrc = "./src/images/1_as-copas.jpg";
        break;
      case 2:
        cartaSrc = "./src/images/2_dos-copas.jpg";
        break;
      case 3:
        cartaSrc = "./src/images/3_tres-copas.jpg";
        break;
      case 4:
        cartaSrc = "./src/images/4_cuatro-copas.jpg";
        break;
      case 5:
        cartaSrc = "./src/images/5_cinco-copas.jpg";
        break;
      case 6:
        cartaSrc = "./src/images/6_seis-copas.jpg";
        break;
      case 7:
        cartaSrc = "./src/images/7_siete-copas.jpg";
        break;
      case 10:
        cartaSrc = "./src/images/10_sota-copas.jpg";
        break;
      case 11:
        cartaSrc = "./src/images/11_caballo-copas.jpg";
        break;
      case 12:
        cartaSrc = "./src/images/12_rey-copas.jpg";
        break;
      default:
        cartaSrc = "./src/images/back.jpg";
    }
  
    imagenCarta.src = cartaSrc;
}
  
// PULSAR BOTÓN Y MOSTRAR LA CARTA
pedirCarta.addEventListener('click', () => {
    const carta = darCarta();
    console.log("Carta elegida:", carta);
    mostrarCarta(carta); 

    // SUMAR CARTAS
    puntuacion += carta;

    // MÁS DE 7.5 PUNTOS
    if (puntuacion > 7.5) {
        terminarJuego("¡Juego terminado, te has pasado de 7.5 puntos!");
    }

    // PUNTUACIÓN FINAL
    mostrarPuntuacion();
});

// TERMINAR JUEGO
function terminarJuego(mensajeFinal: string): void { 
    gameOver = true;
    pedirCarta.disabled = true;
    plantarseBtn.disabled = true;
    mensajeDiv.textContent = mensajeFinal; // Usamos 'mensajeDiv' para acceder al div
    reiniciarBtn.style.display = "inline"; // Mostrar el botón de reinicio
}
  
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
            mensajeFinal = "Juego terminado."; // Mensaje por defecto para asegurar que siempre tenga un valor
        }

        terminarJuego(mensajeFinal);
    }
});

// Lógica para manejar el botón "Reiniciar"
reiniciarBtn.addEventListener('click', () => {
    puntuacion = 0;
    gameOver = false;
    pedirCarta.disabled = false;
    plantarseBtn.disabled = false;
    mensajeDiv.textContent = ""; // Usamos 'mensajeDiv' para acceder al div
    imagenCarta.src = "./src/images/back.jpg";
    reiniciarBtn.style.display = "none";
    mostrarPuntuacion();
});

// MOSTRAR PUNTUACIÓN
document.addEventListener('DOMContentLoaded', () => {
  mostrarPuntuacion();
});
