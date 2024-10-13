const generarNumeroAleatorio = () => Math.floor(Math.random() * 101);

const numeroParaAcertar = generarNumeroAleatorio();

const NO_ES_UN_NUMERO = 0;
const NO_ES_EL_NUMERO_SECRETO = 1;
const ES_EL_NUMERO_SECRETO = 2;

const muestraMensajeComprobacion = (texto: string, estado: number): void => {
    let mensaje = "";

    switch(estado) {
        case NO_ES_UN_NUMERO:
            mensaje = "No es un número, prueba otra vez";
            break;
        case NO_ES_EL_NUMERO_SECRETO:
            mensaje = `${texto} no es el número secreto, prueba otra vez`;
            break;
        case ES_EL_NUMERO_SECRETO:
            mensaje = "Enhorabuena, has acertado el número";
            break;
        default:
            mensaje = "No sé qué ha pasado, pero no deberías estar aquí";
            break;  
    }

    // if (estado === NO_ES_UN_NUMERO) {
    //     mensaje = "No es un número, prueba otra vez";
    // } else if (estado === NO_ES_EL_NUMERO_SECRETO) {
    //     mensaje = `${texto} no es el número secreto, prueba otra vez`;
    // } else if (estado === ES_EL_NUMERO_SECRETO) {
    //     mensaje = "Enhorabuena, has acertado el número";
    // }

    document.getElementById("resultado")!.innerHTML = mensaje;

    // const comprobarNumero = (numero) => {
    //     const numero = parseInt(texto);
    //     const esUnNumero = !isNaN(numero);
    //     let resultado = NO_ES_UN_NUMERO;
    
    //     if(esUnNumero) {
    //         if(numero == numeroParaAcertar) {
    //             resultado = ES_EL_NUMERO_SECRETO;
    //         } else {
    //             resultado = NO_ES_EL_NUMERO_SECRETO;
    //         }
    //     } 
        
    //     return resultado;
    // };
    
    // const handleCompruebaClick = () => {
    //     const texto = document.getElementById("numero").value;
    //     const estado = comprobarNumero(texto);
    //     muestraMensajeComprobacion(texto, estado);
    // };
    // const botonComprobar = document.getElementById("comprobar");
    // botonComprobar.addEventListener("click", handleCompruebaClick);
};




