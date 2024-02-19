// codigo de vocales para encriptar
let a = "ai";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";
let textoInput = [];
let arrayDeVocales1=[a,e,i,o,u];
//vocales para comparar texto a cifrar
let arrayDeVocales2=["a","e","i","o","u"];
let textoCifrado = [];
let unirTextoCifrado=[];
//let palabraSeparada =[];
//let letraSeparada =[];
//let vocalesSeparadas =[];
//let arrayDeLetras= [];

function descifrar() {
    //obtiene texto desde el input
    textoInput = document.getElementById('textoInput').value;
    console.log(textoInput);
    //reemplaza codigo/cifrar por vocal
    textoInput = textoInput.replaceAll (a,"a")
    textoInput = textoInput.replaceAll (e,"e")
    textoInput = textoInput.replaceAll (i,"i")
    textoInput = textoInput.replaceAll (o,"o")
    textoInput = textoInput.replaceAll (u,"u")
    mostrarTextoCifrado('p',textoInput);
    document.getElementById('cifrar').setAttribute('disabled','true');
}



function cifrar() {
    //obtiene texto desde el input
    textoInput = document.getElementById('textoInput').value;
    console.log(textoInput);
    //separa string de input y lo convierte en array separado en palabras
    const arrayDeInput= textoInput.split(" ");

        //recorre array separado en palabras
        for (let index = 0; index < arrayDeInput.length; index++) {
            palabraSeparada = arrayDeInput[index];

            //separa palabra en letras 
            arrayDeLetras = palabraSeparada.split("");
            //agrega espacio al final de las palabras
            arrayDeLetras.push(" ");

            //recorre array separado en letras
            for (let index1 = 0; index1 < arrayDeLetras.length; index1++) {
            letraSeparada = arrayDeLetras[index1];
            
                //compara elemento de arrayDeLetras con vocales de arrayDeVocales2 
                if (arrayDeVocales2.includes(letraSeparada)) {
                    
                    //si elemento es vocal recorre arrayDeVocales2          
                    for (let index2 = 0; index2 < arrayDeVocales2.length; index2++) {
                        vocalesSeparadas = arrayDeVocales2[index2];
                                                
                        // busca cual vocal es elemento de letraSeparada 
                        if (letraSeparada==arrayDeVocales2[index2]) {

                            //obtiene indice de vocal correspondiente en arrayDeVocales2
                            //reemplaza vocal por codigo/cifrar utilizando indice de elemento 
                            //de arrayDeVocales2 para utilizar elemento de arrayDeVocales1
                            cambiaVocalPorClave = textoCifrado.push(arrayDeVocales1[index2])
                            //detiene el ciclo for cuando encontro vocal y la reemplazo por codigo/cifrar
                            break;
                        } 
                            else {}  
                    }
                }   
                    else {
                        // si no es vocal se incluye en array
                        textoCifrado.push(letraSeparada)
                        }  
            }
        }
   
    //une letras separadas formando palabras 
    unirTextoCifrado = textoCifrado.join(""); 
    console.log(unirTextoCifrado);
    reestableceTextoParrafo () ;
    //elimina texto procesado
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

function reestableceTextoParrafo (){
    //deshabilita los botones
    //mostrar el texto cifrado o descifrado
    mostrarTextoCifrado('p',unirTextoCifrado);
    document.getElementById('cifrar').setAttribute('disabled','true');
    return;
}

 
 