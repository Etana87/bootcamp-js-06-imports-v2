import { gameState } from './model';
import { mostrarUrlCarta, muestraPuntuacion, mostrarMensaje, finalizarPartida } from './ui';

// Número aleatorio entre 1 y 10
const generarNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};

// Convierte un número a una carta (simplificado)
const generarNumeroCarta = (numero: number): string => {
  const palos = ['oros', 'copas', 'espadas', 'bastos'];
  const palo = palos[Math.floor(Math.random() * palos.length)];
  return `${numero}_de_${palo}`;
};

// Devuelve la URL de la imagen de la carta
const obtenerUrlCarta = (carta: string): string => {
  return `./cartas/${carta}.png`;
};

// Asigna puntos a la carta
const obtenerPuntosCarta = (carta: string): number => {
  const numero = parseInt(carta);
  return numero > 7 ? 0.5 : numero;
};

// Suma los puntos de la carta
const sumarPuntos = (puntos: number): number => {
  return puntos;
};

// Actualiza el total de puntos en el estado
const actualizarPuntosTotales = (puntos: number): void => {
  gameState.puntosTotales += puntos;
};


export const revisarPartida = (): void => {
  if (gameState.puntosTotales === 7.5) {
    console.log('He ganado la partida');
    finalizarPartida();
  }
  if (gameState.puntosTotales > 7.5) {
    console.log('He perdido la partida');
    mostrarMensaje('Game Over');
    finalizarPartida();
  }
};

export const pedirCarta = (): void => {
  if (gameState.gameOver) return;

  const numeroAleatorio = generarNumeroAleatorio();
  const carta = generarNumeroCarta(numeroAleatorio);
  const urlCarta = obtenerUrlCarta(carta);
  mostrarUrlCarta(urlCarta);

  const puntosCarta = obtenerPuntosCarta(carta);
  const puntosSumados = sumarPuntos(puntosCarta);
  actualizarPuntosTotales(puntosSumados);

  muestraPuntuacion();
  revisarPartida();
};

export const plantarse = (): void => {
  if (gameState.gameOver) return;
  gameState.plantado = true;

  if (gameState.puntosTotales < 4) {
    mostrarMensaje("Has sido muy conservador");
  } else if (gameState.puntosTotales === 5) {
    mostrarMensaje("Te ha entrado el canguelo, ¿eh?");
  } else if (gameState.puntosTotales === 6 || gameState.puntosTotales === 7) {
    mostrarMensaje("Casi, casi...");
  } else if (gameState.puntosTotales === 7.5) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
  }

  finalizarPartida();
};

export const whatIf = (): void => {
  if (!gameState.plantado) return;

  let simulacionPuntos = gameState.puntosTotales;

  while (simulacionPuntos <= 7.5) {
    const numeroAleatorio = generarNumeroAleatorio();
    const carta = generarNumeroCarta(numeroAleatorio);
    const puntosCarta = obtenerPuntosCarta(carta);
    simulacionPuntos += puntosCarta;

    if (simulacionPuntos > 7.5) {
      mostrarMensaje(`Si hubieras seguido, te habrías pasado con ${simulacionPuntos} puntos.`);
      break;
    }
  }
};