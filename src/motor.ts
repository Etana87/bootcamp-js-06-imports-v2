import { 
    gameState, 
    generarNumeroAleatorio, 
    generarNumeroCarta, 
    obtenerUrlCarta, 
    obtenerPuntosCarta, 
    sumarPuntos, 
    actualizarPuntosTotales 
  } from './model';
  
  import { mostrarUrlCarta, muestraPuntuacion, mostrarMensaje } from './ui';
  
  /* Reglas y lógica del juego */
  
  export const finalizarPartida = (): void => {
    gameState.gameOver = true;
    document.getElementById('reiniciar')!.style.display = 'block';
    document.getElementById('whatIfButton')!.style.display = 'block';
    (document.getElementById('pedirCarta') as HTMLButtonElement).disabled = true;
    (document.getElementById('plantarse') as HTMLButtonElement).disabled = true;
  };
  
  export const revisarPartida = (): void => {
    if (gameState.puntosTotales === 7.5) {
      console.log('He ganado la partida');
      finalizarPartida();
    }
    if (gameState.puntosTotales > 7.5) {
      console.log('He perdido la partida');
      mostrarMensaje('Game Over');
      finalizarPartida();
    }
  };
  
  export const pedirCarta = (): void => {
    if (gameState.gameOver) return;
    
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
  
  export const plantarse = (): void => {
    if (gameState.gameOver) return;
    gameState.plantado = true;
    
    if (gameState.puntosTotales < 4) {
      mostrarMensaje("Has sido muy conservador");
    } else if (gameState.puntosTotales === 5) {
      mostrarMensaje("Te ha entrado el canguelo, ¿eh?");
    } else if (gameState.puntosTotales === 6 || gameState.puntosTotales === 7) {
      mostrarMensaje("Casi, casi...");
    } else if (gameState.puntosTotales === 7.5) {
      mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
    }
    finalizarPartida();
  };
  
  export const whatIf = (): void => {
    if (!gameState.plantado) return;
    let simulacionPuntos = gameState.puntosTotales;
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
  
  /* Inicialización del juego */
  
  export const initGame = (): void => {
    document.addEventListener('DOMContentLoaded', () => {
      // Inicializa la puntuación al cargar la página
      muestraPuntuacion();
  
      // Asigna los eventos a los botones
      document.getElementById('pedirCarta')!.addEventListener('click', pedirCarta);
      document.getElementById('plantarse')!.addEventListener('click', plantarse);
      document.getElementById('reiniciar')!.addEventListener('click', reiniciarPartida);
      document.getElementById('whatIfButton')!.addEventListener('click', whatIf);
    });
  };
  