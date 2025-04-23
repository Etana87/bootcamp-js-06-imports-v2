export const actualizarPuntosTotales = (nuevosPuntos: number) => {
    partida.puntosTotales = nuevosPuntos;
};

interface Partida {
    puntosTotales: number;
}
export const partida:Partida = { 
    puntosTotales: 0,
};