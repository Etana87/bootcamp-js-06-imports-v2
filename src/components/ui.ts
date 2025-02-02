export function mostrarMensaje(mensaje: string): void {
    const mensajeDiv = document.getElementById('mensaje');
    if (mensajeDiv) mensajeDiv.textContent = mensaje;
}

export function toggleBoton(id: string, estado: boolean): void {
    const boton = document.getElementById(id) as HTMLButtonElement;
    if (boton) boton.disabled = !estado;
}

export function mostrarBoton(id: string, visible: boolean): void {
    const boton = document.getElementById(id) as HTMLButtonElement;
    if (boton) boton.style.display = visible ? 'inline' : 'none';
}