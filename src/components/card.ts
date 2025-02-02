import { Carta } from '../types/index';

export function darCarta(): Carta {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    return (randomNum > 7 ? randomNum + 2 : randomNum) as Carta;
}

export function mostrarCarta(carta: Carta): void {
    const imagenCarta = document.getElementById('carta') as HTMLImageElement;
    const cartaSrc = `./src/assets/images/${carta}_carta.jpg`;
    if (imagenCarta) imagenCarta.src = cartaSrc;
}