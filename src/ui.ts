import { gameState } from './model';
import { pedirCarta, plantarse, whatIf } from './motor';

/* Muestra la imagen de la carta en pantalla */
export const mostrarUrlCarta = (urlCarta: string): void => {
  const imagenElemento = document.getElementById('carta');
  if (imagenElemento && imagenElemento instanceof HTMLImageElement) {
    imagenElemento.src = urlCarta;
  }
};

/* Muestra la puntuación actual del jugador */
export const muestraPuntuacion = (): void => {
  const puntuacionElemento = document.getElementById('puntuacion');
  if (puntuacionElemento && puntuacionElemento instanceof HTMLDivElement) {
    puntuacionElemento.textContent = `Puntuación: ${gameState.puntosTotales}`;
  }
};

/* Muestra un mensaje al jugador */
export const mostrarMensaje = (mensaje: string): void => {
  const mensajeElemento = document.getElementById('mensaje');
  if (mensajeElemento && mensajeElemento instanceof HTMLDivElement) {
    mensajeElemento.textContent = mensaje;
  }
};

/* Finaliza la partida: desactiva botones y muestra opciones */
export const finalizarPartida = (): void => {
  gameState.gameOver = true;
  document.getElementById('reiniciar')!.style.display = 'block';
  document.getElementById('whatIfButton')!.style.display = 'block';
  (document.getElementById('pedirCarta') as HTMLButtonElement).disabled = true;
  (document.getElementById('plantarse') as HTMLButtonElement).disabled = true;
};

/* Reinicia la partida: resetea estado y limpia interfaz */
export const reiniciarPartida = (): void => {
  gameState.puntosTotales = 0;
  gameState.gameOver = false;
  gameState.plantado = false;

  muestraPuntuacion();
  mostrarMensaje('');

  (document.getElementById('pedirCarta') as HTMLButtonElement).disabled = false;
  (document.getElementById('plantarse') as HTMLButtonElement).disabled = false;

  document.getElementById('reiniciar')!.style.display = 'none';
  document.getElementById('whatIfButton')!.style.display = 'none';
};

/* Inicializa el juego al cargar la página */
export const initGame = (): void => {
  document.addEventListener('DOMContentLoaded', () => {
    muestraPuntuacion();

    document.getElementById('pedirCarta')!.addEventListener('click', pedirCarta);
    document.getElementById('plantarse')!.addEventListener('click', plantarse);
    document.getElementById('reiniciar')!.addEventListener('click', reiniciarPartida);
    document.getElementById('whatIfButton')!.addEventListener('click', whatIf);
  });
};