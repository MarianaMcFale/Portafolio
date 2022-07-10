const inputNombre = document.querySelector("#inputNombre");
const inputEmail = document.querySelector("#inputEmail");
const inputAsunto = document.querySelector("#inputAsunto");
const textMensaje = document.querySelector("#mensaje");
const botonEnviar = document.querySelector("#botonEnviar");
const mensajeUser= document.querySelector("#mensajeUser");
const formulario = document.querySelector(".formContacto_form");
let faltaDato = 0;


function validarNombre(dato){
    if (dato != "" && dato.length < 51){
        var validado = true;
    } else if(dato == ""){
        var validado = false;
        faltaDato++;
        mensajeUser.textContent = "✘ Completar nombre";
        mensajeUser.classList.add("mensajeError");
    } else if(dato.length > 50){
        var validado = false;
        mensajeUser.textContent = "✘ El nombre contiene demasiados caracteres";
        mensajeUser.classList.add("mensajeError");
    }
    return validado;
}

function validarAsunto(dato){
    if (dato != ""){
        var validado = true;
    } else{
        var validado = false;
        faltaDato++;
        mensajeUser.textContent = "✘ Completar asunto.";
        mensajeUser.classList.add("mensajeError");
    }
    return validado;
}

function validarMsj(dato){
    if (dato != ""){
        var validado = true;
    } else{
        var validado = false;
        faltaDato++;
        mensajeUser.textContent = "✘ El mensaje está en blanco.";
        mensajeUser.classList.add("mensajeError");
    }
    return validado;
}

function validarEmail(dato){
    if(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(dato)) {
        var validado = true;
    } else if(dato == ""){
        var validado = false;
        faltaDato++;
        mensajeUser.textContent = "✘ Completar email";
        mensajeUser.classList.add("mensajeError");
    } else{
        var validado = false;
        mensajeUser.textContent = "✘ Email incorrecto";
        mensajeUser.classList.add("mensajeError");
    }
    return validado;
}

/*function vincularDatos(){
    var filaDatos =  {email:inputEmail.value,asunto:inputAsunto.value,nombre:inputNombre.value,mensaje:textMensaje.value};
    agregarFila(filaDatos);
}*/

function enviar(){
    faltaDato = 0;
    var nombreAprobado = validarNombre(inputNombre.value);
    var emailAprobado = validarEmail(inputEmail.value);
    var asuntoAprobado = validarAsunto(inputAsunto.value);
    var mensajeAprobado = validarMsj(textMensaje.value);
    if(nombreAprobado && emailAprobado && asuntoAprobado && mensajeAprobado){
        faltaDato = false;
        mensajeUser.textContent = "✔ Su mensaje ha sido enviado.";
        mensajeUser.classList.remove("mensajeError");
        mensajeUser.classList.add("mensajeEnviado");
        inputNombre.value = "";
        inputEmail.value = "";
        inputAsunto.value ="";
        textMensaje.value ="";
        /*vincularDatos();*/
    } else if (faltaDato > 1){
        mensajeUser.textContent = "✘ Completar todos los datos solicitados";
        mensajeUser.classList.add("mensajeError");
    }
};

botonEnviar.onclick = enviar;