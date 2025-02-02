import { darCarta, mostrarCarta } from './card';
import { actualizarPuntuacion, obtenerPuntuacion, reiniciarPuntuacion } from './score';
import { mostrarMensaje, toggleBoton, mostrarBoton } from './ui';

let gameOver = false;

export function pedirCartaHandler(): void {
    if (gameOver) return;
    const carta = darCarta();
    mostrarCarta(carta);
    actualizarPuntuacion(carta);

    if (obtenerPuntuacion() > 7.5) {
        terminarJuego("¡Te has pasado de 7.5 puntos!");
    }
}

export function plantarseHandler(): void {
    const puntos = obtenerPuntuacion();
    let mensaje = puntos === 7.5 ? "¡Lo has clavado!" : "Juego terminado.";
    terminarJuego(mensaje);
}

export function reiniciarJuegoHandler(): void {
    reiniciarPuntuacion();
    gameOver = false;
    mostrarMensaje("");
    // Restablecer la imagen a la carta de reverso (back).\n
    // Puedes ajustar la ruta según corresponda\n
    mostrarCarta(0 as any); // Usamos 0 como indicador de carta reverso.
    toggleBoton('pedirCarta', true);
    toggleBoton('plantarse', true);
    mostrarBoton('reiniciar', false);
    mostrarBoton('whatIfButton', false);
}

/**
 * Función que simula qué pasaría si se pidiera otra carta tras terminar el juego.
 */
export function whatIfHandler(): void {
    if (!gameOver) return;
    const carta = darCarta();
    mostrarCarta(carta);
    actualizarPuntuacion(carta);

    if (obtenerPuntuacion() > 7.5) {
        toggleBoton('whatIfButton', false); // Deshabilitar el botón si se supera 7.5
        mostrarMensaje('Te habrías pasado de 7.5 puntos.');
    } else {
        // Puedes agregar lógica adicional si quieres mostrar el resultado de la simulación.\n
        mostrarMensaje(`Simulación - Nueva Puntuación: ${obtenerPuntuacion()}`);
    }
}

function terminarJuego(mensaje: string): void {
    gameOver = true;
    mostrarMensaje(mensaje);
    toggleBoton('pedirCarta', false);
    toggleBoton('plantarse', false);
    mostrarBoton('reiniciar', true);
    mostrarBoton('whatIfButton', true);
}