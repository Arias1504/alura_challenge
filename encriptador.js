const textoArea = document.querySelector('.encriptador__contenido__mensaje');
const imgMuneco = document.querySelector('.encriptador__resultado__imagen');
const botonEncriptar = document.querySelector('.container__botones');
const botonDesencriptar = document.querySelector('.container__botones__secundario');
const resultadoTexto = document.querySelector('.encriptador__resultado__texto');
const botonCopiar = document.querySelector('.encriptador__contenido__boton');
const resultadoTitulo = document.querySelector('.encriptador__resultado__titulo');

const llaves = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
]

//Funcion para encriptar mensaje
function encriptarMensaje(mensaje){
    let mensajeEncriptado = " ";
    for(let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if(letra ===llaves[j][0]){
                encriptada = llaves[j][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

//Funcion para desencriptar mensaje
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

textoArea.addEventListener('input', (e)=>{
    imgMuneco.style.display = 'none';

});

function encriptar(){
    let mensaje = textoArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove('hidden');
    resultadoTitulo.textContent = 'Mensaje encriptado:';
}

function desencriptar(){
    let mensaje = textoArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    resultadoTitulo.textContent = 'Mensaje desencriptado:';
}

function copiar(){
    let textoCopiado = resultadoTexto.textContent;
    navigator.clipboard.writeText(textoCopiado);
    resultadoTitulo.textContent = 'Texto copiado';
    resultadoTexto.textContent = '';
}

