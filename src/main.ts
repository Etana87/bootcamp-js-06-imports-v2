let puntosTotales = 0;
let gameOver = false;
let plantado = false;

const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10) + 1;
};

const generarNumeroCarta = (numeroAleatorio: number) => {
    if (numeroAleatorio > 7) {
        return numeroAleatorio + 2;
    }
    return numeroAleatorio;
};

const obtenerUrlCarta = (carta: number) => {
    switch (carta) {
        case 1:
            return './src/assets/images/1_carta.jpg';
        case 2:
            return './src/assets/images/2_carta.jpg';
        case 3:
            return './src/assets/images/3_carta.jpg';
        case 4:
            return './src/assets/images/4_carta.jpg';
        case 5:
            return './src/assets/images/5_carta.jpg';
        case 6:
            return './src/assets/images/6_carta.jpg';
        case 7:
            return './src/assets/images/7_carta.jpg';
        case 10:
            return './src/assets/images/10_carta.jpg';
        case 11:
            return './src/assets/images/11_carta.jpg';
        case 12:
            return './src/assets/images/12_carta.jpg';
        default:
            return './src/assets/images/0_carta.jpg';
    }
};

const mostrarUrlCarta = (urlCarta: string) => {
    const imagenElemento = document.getElementById('carta');

    if (imagenElemento && imagenElemento instanceof HTMLImageElement) {
        imagenElemento.src = urlCarta;
    }
};

const obtenerPuntosCarta = (carta: number) => {
    if (carta > 7) {
        return 0.5;
    }
    return carta;
};

const sumarPuntos = (punto: number) => {
    return puntosTotales + punto;
};

const actualizarPuntosTotales = (nuevosPuntos: number) => {
    puntosTotales = nuevosPuntos;
};

const muestraPuntuacion = () => {
    const puntuacionElemento = document.getElementById('puntuacion');
    if (puntuacionElemento && puntuacionElemento instanceof HTMLDivElement) {
        puntuacionElemento.textContent = `Puntuación: ${puntosTotales}`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    muestraPuntuacion();
});

const mostrarMensaje = (mensaje: string) => {
    const mensajeElemento = document.getElementById('mensaje');
    if (mensajeElemento && mensajeElemento instanceof HTMLDivElement) {
        mensajeElemento.textContent = mensaje;
    }
};

const finalizarPartida = () => {
    gameOver = true;
    document.getElementById('reiniciar')!.style.display = 'block';
    document.getElementById('whatIfButton')!.style.display = 'block';
    (document.getElementById('pedirCarta') as HTMLButtonElement).disabled = true;
    (document.getElementById('plantarse') as HTMLButtonElement).disabled = true;
};

const revisarPartida = () => {
    if (puntosTotales === 7.5) {
        console.log('he ganado la partida');
        finalizarPartida();
    }
    if (puntosTotales > 7.5) {
        console.log('he perdido la partida');
        mostrarMensaje('Game Over');
        finalizarPartida();
    }
};

const pedirCarta = () => {
    if (gameOver) return;
    
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

const plantarse = () => {
    if (gameOver) return;
    plantado = true;
    
    if (puntosTotales < 4) {
        mostrarMensaje("Has sido muy conservador");
    } else if (puntosTotales === 5) {
        mostrarMensaje("Te ha entrado el canguelo eh?");
    } else if (puntosTotales === 6 || puntosTotales === 7) {
        mostrarMensaje("Casi casi...");
    } else if (puntosTotales === 7.5) {
        mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
    }
    finalizarPartida();
};

const whatIf = () => {
    if (!plantado) return;
    let simulacionPuntos = puntosTotales;
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

const reiniciarPartida = () => {
    puntosTotales = 0;
    gameOver = false;
    plantado = false;
    muestraPuntuacion();
    mostrarMensaje('');
    (document.getElementById('pedirCarta') as HTMLButtonElement).disabled = false;
    (document.getElementById('plantarse') as HTMLButtonElement).disabled = false;
    document.getElementById('reiniciar')!.style.display = 'none';
    document.getElementById('whatIfButton')!.style.display = 'none';
};

document.getElementById('pedirCarta')!.addEventListener('click', pedirCarta);
document.getElementById('plantarse')!.addEventListener('click', plantarse);
document.getElementById('reiniciar')!.addEventListener('click', reiniciarPartida);
document.getElementById('whatIfButton')!.addEventListener('click', whatIf);
