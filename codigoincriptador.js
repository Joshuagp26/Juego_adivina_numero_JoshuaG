/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/


const cambio = document.querySelector('.vectorTexto');
let textoDerecho = document.querySelector('.textoPrincipalAside');
let textoDerechoSecundario = document.querySelector(".textoSecundarioAside");
let imagen = document.querySelector('.imagenDerecha');
let bCopiar = document.querySelector('.copiar');
let actualizar = document.getElementById("Actualizar");


bCopiar.style.display="none";


//tomado de caja de texto
function encriptar(){
    let textoEncriptar = document.querySelector('.cajaTexto1').value.toLowerCase();
    //cambio de texto
    let textocambio = textoEncriptar.replace(/e/g,"enter");
    textocambio = textocambio.replace(/i/g,"imes");
    textocambio = textocambio.replace(/a/g,"ai");
    textocambio = textocambio.replace(/o/g,"ober");
    textocambio = textocambio.replace(/u/g,"ufat");

    
    //mensaje de alerta no hay texto       
    if (textoEncriptar !== ""){
        cambioTexto(textocambio);
        cambio.textContent ='Solo letras minúsculas y sin acentos';
    }else{
        cambio.textContent ='Campo de texto vacio, por favor ingresar texto';
    }    
    
}

    //funcion de desencriptar 
function desEncriptar(){
    let textoEncriptar = document.querySelector('.cajaTexto1').value.toLowerCase();
    //cambio de texto
    let textocambio = textoEncriptar.replace(/enter/g,"e");
    textocambio = textocambio.replace(/imes/g,"i");
    textocambio = textocambio.replace(/ai/g,"a");
    textocambio = textocambio.replace(/ober/g,"o");
    textocambio = textocambio.replace(/ufat/g,"u");

    
     //mensaje de alerta no hay texto       
     if (textoEncriptar !== ""){
        cambioTexto(textocambio);
        cambio.textContent ='Solo letras minúsculas y sin acentos';
    }else{
        cambio.textContent ='Campo de texto vacio, por favor ingresar texto';
    }    
    
}
//CAMBIO DE TEXTO DERECHO & contenido
function cambioTexto(textocambio){
textoDerecho.textContent = textocambio;
imagen.style.display = "none";
textoDerechoSecundario.style.display = "none";
bCopiar.style.display="block";
//agrego una clase a la clase actualizar>Actualizar 
actualizar.classList.add('cambio');
}

//funcion COPIAR 

function copiar(){
    //tomamos el texto y lo guardamos en la variable copiado
    let copiado = document.querySelector('.textoPrincipalAside').textContent;
   //usando el objeto navigator.seguido de la propiedad clipboard
    navigator.clipboard.writeText(copiado);
   

}