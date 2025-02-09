import { gameState } from './model';

/* Actualiza la imagen de la carta que se muestra en pantalla */
export const mostrarUrlCarta = (urlCarta: string): void => {
  const imagenElemento = document.getElementById('carta');
  if (imagenElemento && imagenElemento instanceof HTMLImageElement) {
    imagenElemento.src = urlCarta;
  }
};

/* Actualiza el texto de la puntuación, leyendo el valor actual en gameState */
export const muestraPuntuacion = (): void => {
  const puntuacionElemento = document.getElementById('puntuacion');
  if (puntuacionElemento && puntuacionElemento instanceof HTMLDivElement) {
    puntuacionElemento.textContent = `Puntuación: ${gameState.puntosTotales}`;
  }
};

/* Muestra un mensaje en el elemento destinado a ello */
export const mostrarMensaje = (mensaje: string): void => {
  const mensajeElemento = document.getElementById('mensaje');
  if (mensajeElemento && mensajeElemento instanceof HTMLDivElement) {
    mensajeElemento.textContent = mensaje;
  }
};
