
function registro(){

    let vNom = new RegExp("[a-zA-Z]+");
    let vAcceso = new RegExp("[a-zA-Z0-9]+");


    nombre = document.getElementById("nombreR").value;
    apellido = document.getElementById("apellidoR").value;
    usuario = document.getElementById("usuarioR").value;
    email = document.getElementById("emailR").value;
    password = document.getElementById("passwordR").value;
    error=0;


    /**Nombre validacion campo vacio y validacion regex */
    if(nombre.length > 0){
        if(vNom.test(nombre) == false){
            n = document.getElementById("nombreR")
            n.classList.add("error")
            document.getElementById("apellidoR").setAttribute("disabled", "")
            document.getElementById("errorMsg1").classList.remove("ocultar")
            error=1
        }else{
            n = document.getElementById("nombreR")
            n.classList.remove("error")
            document.getElementById("apellidoR").removeAttribute("disabled")
            document.getElementById("errorMsg1").classList.add("ocultar")
            error=0
        }
        
    }else{
        document.getElementById("apellidoR").setAttribute("disabled", "")
        error=1;
    }
    /**Apellido validacion campo vacio y validacion regex */
    if(apellido.length > 0 && nombre.length > 0 && error == 0){
        if(vNom.test(apellido) == false){
            n = document.getElementById("apellidoR")
            n.classList.add("error")
            document.getElementById("usuarioR").setAttribute("disabled", "")
            document.getElementById("errorMsg2").classList.remove("ocultar")
            error=1;
            
        }else{
            n = document.getElementById("apellidoR")
            n.classList.remove("error")
            document.getElementById("usuarioR").removeAttribute("disabled")
            document.getElementById("errorMsg2").classList.add("ocultar")
            error=0;
        }
    }else{
        document.getElementById("usuarioR").setAttribute("disabled", "")
        error=1;
    }
    /**Usuario validacion campo vacio y validacion regex */
    if(usuario.length > 0 && apellido.length > 0 && nombre.length > 0 && error == 0){
        if(vAcceso.test(usuario) == false){
            n = document.getElementById("usuarioR")
            n.classList.add("error")
            document.getElementById("emailR").setAttribute("disabled", "")
            document.getElementById("errorMsg3").classList.remove("ocultar")
            error=1;
        }else{
            n = document.getElementById("usuarioR")
            n.classList.remove("error")
            document.getElementById("emailR").removeAttribute("disabled")
            document.getElementById("errorMsg3").classList.add("ocultar")
            error=0;
        }
    }else{
        document.getElementById("emailR").setAttribute("disabled", "")
        error=1;
    }
    /**Email validacion campo vacio y validacion regex */
    if(email.length > 0 && usuario.length > 0 && apellido.length > 0 && nombre.length > 0 && error == 0){
        document.getElementById("passwordR").removeAttribute("disabled")
        document.getElementById("submitR").removeAttribute("disabled")
    }else{
        document.getElementById("passwordR").setAttribute("disabled", "")
        document.getElementById("submitR").setAttribute("disabled", "")
    }
    console.log(error)
    

}


function acceso (){

    usuario = document.getElementById("usuarioA").value;
    password = document.getElementById("passwordA").value;

    if(usuario != "" && password != ""){

        document.getElementById("submitA").removeAttribute("disabled");

    }else{
        document.getElementById("submitA").setAttribute("disabled", "")
    }

}

