class Controller{

    constructor(){
        this.usuario = "";

        document.getElementById("buttonInicioSesion").onclick = () => {
                        console.log("e");
            this.inicioSesion();
        }

      /*  document.getElementById("buttonRegistro").onclick = () => {
            this.registro();
        }*/


     
    }

    inicioSesion(){
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        this.usuario = this.model.inicioSesion(usuario, contrasena);
    }
} 