import { pedirCartaHandler, plantarseHandler, reiniciarJuegoHandler, whatIfHandler } from './components/game';

document.getElementById('pedirCarta')?.addEventListener('click', pedirCartaHandler);
document.getElementById('plantarse')?.addEventListener('click', plantarseHandler);
document.getElementById('reiniciar')?.addEventListener('click', reiniciarJuegoHandler);
document.getElementById('whatIfButton')?.addEventListener('click', whatIfHandler);

document.addEventListener('DOMContentLoaded', () => {
    reiniciarJuegoHandler(); // Inicializa el estado del juego
});