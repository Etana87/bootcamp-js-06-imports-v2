import { partida, actualizarPuntosTotales } from "./model";
import { generarNumeroAleatorio, generarNumeroCarta, obtenerPuntosCarta, obtenerUrlCarta, sumarPuntos} from "./motor";

const mostrarUrlCarta = (urlCarta: string) => {
    const imagenElemento = document.getElementById('carta');

    if (imagenElemento && imagenElemento instanceof HTMLImageElement) {
        imagenElemento.src = urlCarta;
    }
};

export const muestraPuntuacion = () => {
    const puntuacionElemento = document.getElementById('puntuacion');
    if (puntuacionElemento && puntuacionElemento instanceof HTMLDivElement) {
        puntuacionElemento.textContent = `Puntuación: ${partida.puntosTotales}`;
    }
};

const mostrarMensaje = (mensaje: string) => {
    const mensajeElemento = document.getElementById('mensaje');
    if (mensajeElemento && mensajeElemento instanceof HTMLDivElement) {
        mensajeElemento.textContent = mensaje;
    }
};

const finalizarPartida = () => {
    const reiniciarBtn = document.getElementById('reiniciar');
    if (reiniciarBtn && reiniciarBtn instanceof HTMLButtonElement) {
        reiniciarBtn.style.display = 'block';
    }

    const whatIfBtn = document.getElementById('whatIfButton');
    if (whatIfBtn && whatIfBtn instanceof HTMLButtonElement) {
        whatIfBtn.style.display = 'block';
    }

    const pedirCartaBtn = document.getElementById('pedirCarta');
    if (pedirCartaBtn && pedirCartaBtn instanceof HTMLButtonElement) {
        pedirCartaBtn.disabled = true;
    }

    const plantarseBtn = document.getElementById('plantarse');
    if (plantarseBtn && plantarseBtn instanceof HTMLButtonElement) {
        plantarseBtn.disabled = true;
    }
};

const revisarPartida = () => {
    if (partida.puntosTotales === 7.5) {
        mostrarMensaje('he ganado la partida');
        finalizarPartida();
    }
    if (partida.puntosTotales > 7.5) {
        console.log('he perdido la partida');
        mostrarMensaje('Game Over');
        finalizarPartida();
    }
};

export const pedirCarta = () => {
    // if (gameOver) return;
    
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

const obtenerMensajePlantarse = () => {
    if (partida.puntosTotales < 4) {
        return "Has sido muy conservador";
    } else if (partida.puntosTotales === 5) {
        return "Te ha entrado el canguelo eh?";
    } else if (partida.puntosTotales === 6 || partida.puntosTotales === 7) {
        return "Casi casi...";
    } else if (partida.puntosTotales === 7.5) {
        return "¡Lo has clavado! ¡Enhorabuena!";
    }
    return "Has perdido";
}

export const plantarse = () => {
    // if (gameOver) return;
    // plantado = true;
    
    const mensaje = obtenerMensajePlantarse();
    mostrarMensaje(mensaje);
    finalizarPartida();
};

export const whatIf = () => {
    let simulacionPuntos = partida.puntosTotales;
    const numeroAleatorio = generarNumeroAleatorio();
        const carta = generarNumeroCarta(numeroAleatorio);
        const puntosCarta = obtenerPuntosCarta(carta);
        simulacionPuntos += puntosCarta;
        if (simulacionPuntos > 7.5) {
            mostrarMensaje(`Si hubieras seguido, te habrías pasado con ${simulacionPuntos} puntos.`);
        }
};

export const reiniciarPartida = () => {
    partida.puntosTotales = 0;
    muestraPuntuacion();
    mostrarMensaje('');

    const pedirCartaBtn = document.getElementById('pedirCarta');
    if (pedirCartaBtn && pedirCartaBtn instanceof HTMLButtonElement) {
        pedirCartaBtn.disabled = false;
    }

    const plantarseBtn = document.getElementById('plantarse');
    if (plantarseBtn && plantarseBtn instanceof HTMLButtonElement) {
        plantarseBtn.disabled = false;
    }

    const reiniciarBtn = document.getElementById('reiniciar');
    if (reiniciarBtn && reiniciarBtn instanceof HTMLElement) {
        reiniciarBtn.style.display = 'none';
    }

    const whatIfBtn = document.getElementById('whatIfButton');
    if (whatIfBtn && whatIfBtn instanceof HTMLElement) {
        whatIfBtn.style.display = 'none';
    }
};