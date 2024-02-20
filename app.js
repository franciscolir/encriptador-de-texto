
let a = "ai";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";
let textoInput = [];
let arrayDeVocales1=[a,e,i,o,u];
let arrayDeVocales2=["a","e","i","o","u"];
let textoCifrado = [];
let unirTextoCifrado=[];
//let palabraSeparada =[];
//let letraSeparada =[];
//let vocalesSeparadas =[];
//let arrayDeLetras= [];

function descifrar() {
    //obtiene texto desde el input
    //reemplaza codigo/cifrar por vocal
    textoInput = document.getElementById('textoInput').value
    textoInput = textoInput.replaceAll (a,"a")
    textoInput = textoInput.replaceAll (e,"e")
    textoInput = textoInput.replaceAll (i,"i")
    textoInput = textoInput.replaceAll (o,"o")
    textoInput = textoInput.replaceAll (u,"u")
    mostrarTextoCifrado('p',textoInput);
    document.getElementById('descifrar').setAttribute('disabled','true');
}

function cifrar() {
    //obtiene texto desde el input
    //separa string de input y lo convierte en array separado en palabras
    //recorre array separado en palabras
    //separa palabra en letras
    //agrega espacio al final de las palabras
    //recorre array separado en letras
    //compara elemento de arrayDeLetras con vocales de arrayDeVocales2 
    //si elemento es vocal recorre arrayDeVocales2 
    //busca cual vocal es elemento de letraSeparada 
    //obtiene indice de vocal correspondiente en arrayDeVocales2
    //reemplaza vocal por codigo/cifrar utilizando indice de elemento 
    //de arrayDeVocales2 para utilizar elemento de arrayDeVocales1
    //detiene el ciclo for cuando encontro vocal y la reemplazo por codigo/cifrar
    //si no es vocal se incluye en array
    //une letras separadas formando palabras
    //elimina texto procesado 
    textoInput = document.getElementById('textoInput').value;
    const arrayDeInput= textoInput.split(" ");

        for (let index = 0; index < arrayDeInput.length; index++) {
            palabraSeparada = arrayDeInput[index];
            arrayDeLetras = palabraSeparada.split("");
            arrayDeLetras.push(" ");

            for (let index1 = 0; index1 < arrayDeLetras.length; index1++) {
            letraSeparada = arrayDeLetras[index1];
                
            if (arrayDeVocales2.includes(letraSeparada)) {
                    
                    for (let index2 = 0; index2 < arrayDeVocales2.length; index2++) {
                        vocalesSeparadas = arrayDeVocales2[index2];
                                                
                        if (letraSeparada==arrayDeVocales2[index2]) {
                            cambiaVocalPorClave = textoCifrado.push(arrayDeVocales1[index2])
                            break;
                        } 
                            else {}  
                    }
                }   
                    else {
                        textoCifrado.push(letraSeparada)
                        }  
            }
        }
    
    unirTextoCifrado = textoCifrado.join(""); 
    console.log(unirTextoCifrado);
    mostrarTextoCifrado('p',unirTextoCifrado);
    document.getElementById('cifrar').setAttribute('disabled','true');
    textoCifrado=[""];
}

function condicionesIniciales(){
    //se inicia conun click en el input
    //habilita botones
    //vacia el input texto
    //muestra mensaje inicial
    document.getElementById('cifrar').removeAttribute('disabled');
    document.getElementById('descifrar').removeAttribute('disabled');
    document.getElementById('textoInput').value = "";
    mostrarTextoCifrado('p',"Ingrese el texto para cifrar o descifrar. Recuerda solo utilizar minusculas, sin puntos o simbolos.") 
}

function mostrarTextoCifrado(elemento, texto) {
    //mostrar el texto cifrado o descifrado
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}