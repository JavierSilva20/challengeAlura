function asignarTexto(elemento,texto){
    //Seleccion del elemento HTML
    let elementoHTML = document.querySelector(elemento);
    //Asigancion del texto
    elementoHTML.innerHTML = texto;
}

function encriptarTexto() {
    //Seleccion del elemento HTML
    let textarea = document.getElementById('valorUsuario');
    // Eliminar espacios en blanco al principio y al final
    let text = textarea.value.trim();
            
    // Expresión regular para verificar que solo hay letras minúsculas
    let lowercaseRegex = /^[a-z\s]+$/;

    // Condición if para validar que no esté vacío y solo contenga letras minúsculas, 
    // en consecuente mostrar un mensaje de error o el texto encriptado
    if (text === "") {
        alert('¡Ooops! Debes ingresar un texto');
    } else if (!lowercaseRegex.test(text)) {
        alert("El campo solo debe contener letras minúsculas y espacios.");
    } else {
        //Obtenemos el valor del input
        let textoUsuario = document.getElementById('valorUsuario').value;
        //Encriptar el texto del usuario
        let textoCifrado = textoUsuario
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        //Asiganr el texto encriptado a otro elemento y lo mostramos
        asignarTexto('#textoRespuesta', textoCifrado);
        //Agregamos estilos a nuestra respuesta
        document.getElementById("textoRespuesta").style.height = "80%";
        document.getElementById("textoRespuesta").style.margin = "0%";
        document.getElementById("muneco").style.display = "none";
    }
}

function desencriptarTexto() {
    //Seleccion del elemento HTML
    let textarea = document.getElementById('valorUsuario');
    // Eliminar espacios en blanco al principio y al final
    let text = textarea.value.trim();
            
    // Expresión regular para verificar que solo hay letras minúsculas
    let lowercaseRegex = /^[a-z\s]+$/;

    // Condición if para validar que no esté vacío y solo contenga letras minúsculas, 
    // en consecuente mostrar un mensaje de error o el texto desencriptado
    if (text === "") {
        alert('¡Ooops! Debes ingresar un texto');
    } else if (!lowercaseRegex.test(text)) {
        alert("El campo solo debe contener letras minúsculas y espacios.");
    } else {
        //Obtenemos el valor del input
        let textoUsuario = document.getElementById('valorUsuario').value;
        //Desencriptar el texto del usuario
        let textoCifrado = textoUsuario
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");    
        //Asiganr el texto encriptado a otro elemento y lo mostramos
        asignarTexto('#textoRespuesta', textoCifrado);
        //Agregamos estilos a nuestra respuesta
        document.getElementById("textoRespuesta").style.height = "80%";
        document.getElementById("textoRespuesta").style.margin = "0%";
        document.getElementById("muneco").style.display = "none";
    }
}

function copiarTexto() {
    //Obtencion del elemento de texto
    let botonTexto = document.getElementById("textoRespuesta");
    //Seleccion del texto
    botonTexto.select();
    botonTexto.setSelectionRange(0,999999);
    //Copiar el texto al portapapeles
    navigator.clipboard.writeText(botonTexto.value);
}
