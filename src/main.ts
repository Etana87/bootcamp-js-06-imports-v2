import {pedirCarta, plantarse, reiniciarPartida, whatIf, muestraPuntuacion} from "./ui";

document.addEventListener("DOMContentLoaded", () => {
    muestraPuntuacion();
    const elementoPlantarse = document.getElementById('plantarse');
    if (elementoPlantarse && elementoPlantarse instanceof HTMLButtonElement) {
        elementoPlantarse.addEventListener('click', plantarse);
    }

    const elementoPedirCarta = document.getElementById('pedirCarta');
    if (elementoPedirCarta && elementoPedirCarta instanceof HTMLButtonElement) {
        elementoPedirCarta.addEventListener('click', pedirCarta);
    }

    const elementoReiniciarPartida = document.getElementById('reiniciar');
    if (elementoReiniciarPartida && elementoReiniciarPartida instanceof HTMLButtonElement) {
        elementoReiniciarPartida.addEventListener('click', reiniciarPartida);
    }

    const elementoWhatIf = document.getElementById('whatIfButton');
    if (elementoWhatIf && elementoWhatIf instanceof HTMLButtonElement) {
        elementoWhatIf.addEventListener('click', whatIf);
    }
});

