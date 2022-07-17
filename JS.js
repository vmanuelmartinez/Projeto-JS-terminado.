const formulario = document.getElementById("formulario")
const name = document.getElementById ("name")
const email = document.getElementById("email")
const assunto = document.getElementById("assunto")
const message = document.getElementById("message")
const alert = document.getElementById("alert")

formulario.addEventListener ("submit", e=> {
    e.preventDefault()
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let send = true
    let warning = ""
    alert.innerHTML = ""

    // Vamos a definir variables para campo nombre

    var minLength = 6;
    var lengthnome = document.getElementById("name").value.length;
    var lengthassunto = document.getElementById("assunto").value.length;
   //  var lengthmessage = documento.getElementById("message").value.length; :(

    if (lengthnome < minLength) {
        warning += `Nome inválido <br>`
        send = false
    }


    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warning += `Email inválido <br>`
        send = false
    }

    if (lengthassunto < minLength) {
        warning += `Assunto inválido`
        send = false
    }


    if(send){
        alert.innerHTML = "Enviado com sucesso!"
    }
    else{
        alert.innerHTML = warning
    }
})
