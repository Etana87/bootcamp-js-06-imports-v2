export const gameState = {
    puntosTotales: 0,
    gameOver: false,
    plantado: false
  };
  
  export const generarNumeroAleatorio = (): number => {
    return Math.floor(Math.random() * 10) + 1;
  };
  
  export const generarNumeroCarta = (numeroAleatorio: number): number => {
    if (numeroAleatorio > 7) {
      return numeroAleatorio + 2;
    }
    return numeroAleatorio;
  };
  
  export const obtenerUrlCarta = (carta: number): string => {
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
  
  export const obtenerPuntosCarta = (carta: number): number => {
    if (carta > 7) {
      return 0.5;
    }
    return carta;
  };
  
  // export const sumarPuntos = (puntosCarta: number): number => {
  //   return gameState.puntosTotales + puntosCarta;
  // };
  
  export const actualizarPuntosTotales = (nuevosPuntos: number): void => {
    gameState.puntosTotales = nuevosPuntos;
  };
  