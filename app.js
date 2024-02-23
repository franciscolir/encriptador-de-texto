

let textoInput = [""];
let codigoCifrar=[
    ["a","ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"]
];
let textoCifrado = [""];
let unirTextoCifrado=[""];


function descifrar() {
    //obtiene texto desde el input
    //recorre texto de input y reemplaza las coincidencias
    //reemplaza codigo/cifrar por vocal
    textoInput = document.getElementById('textoInput').value;
    codigoCifrar.map((element) => textoInput = textoInput.replaceAll (element[1],element[0]));
    mostrarTextoCifrado('p',textoInput);
    document.getElementById('descifrar').setAttribute('disabled','true');
    document.getElementById('cifrar').setAttribute('disabled','true');
}


function cifrar() {
    //obtiene texto desde el input
    //separa string de input y lo convierte en array separado en palabras
    //recorre array separado en palabras
    //comprueba si letra esta incluida en array de vocales/codigo
    //recorre array codigo/cifrar
    //si elemento es vocal se reemplaza por su codigo correspondiente
    //si no es vocal se incluye en array textoCifrado
    //une array textoCifrado en string unirTextoCifrado
    //elimina texto procesado 
    
    textoInput = document.getElementById('textoInput').value;
    let palabras = textoInput.split("");
      
    for (let i = 0; i < palabras.length; i++) {
        let palabraEnLetras = palabras[i];

        if (codigoCifrar.some(subArray => subArray.includes(palabraEnLetras)) ){
                    
            for (let i = 0; i < codigoCifrar.length; i++) {
                let codigoCifrarSeparado =codigoCifrar[i];
   
                    if (codigoCifrarSeparado.includes(palabraEnLetras)) {
                        cambioCodigoLetra= palabraEnLetras.replace (codigoCifrarSeparado[0],codigoCifrarSeparado[1]);
                        textoCifrado.push(cambioCodigoLetra);
                    }                    
                }
        } 
        else {
            textoCifrado.push(palabraEnLetras);
            }  
    }
    unirTextoCifrado=textoCifrado.join("");
    mostrarTextoCifrado("#textoDesCifrado",unirTextoCifrado);
    document.getElementById('cifrar').setAttribute('disabled','true');
    document.getElementById('descifrar').setAttribute('disabled','true');
    //condicionesIniciales()
    textoCifrado=[""];
};

function condicionesIniciales(){
    //se inicia conun click en el input
    //habilita botones
    //vacia el input texto
    //muestra mensaje inicial
    document.getElementById('cifrar').removeAttribute('disabled');
    document.getElementById('descifrar').removeAttribute('disabled');
    //document.getElementById('textoInput').value = "";
    //mostrarTextoCifrado("#textoInformativo","Ingrese el texto para cifrar o descifrar. Recuerda solo utilizar minusculas, sin puntos o simbolos.");
};

function mostrarTextoCifrado(elemento, texto) {
    //mostrar el texto cifrado o descifrado
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function copiarTexto() {
    
    let copiar = document.getElementById("textoDesCifrado");
    let texto = copiar.innerText;
    let textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea); 
};