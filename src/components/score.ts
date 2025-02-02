let puntuacion = 0;

export function actualizarPuntuacion(valor: number): void {
    puntuacion += valor;
    const puntos = document.getElementById('puntuacion');
    if (puntos) puntos.textContent = `Puntuación: ${puntuacion}`;
}

export function reiniciarPuntuacion(): void {
    puntuacion = 0;
    actualizarPuntuacion(0);
}

export function obtenerPuntuacion(): number {
    return puntuacion;
}