class VistaCrearPersona {
    constructor() {
        this.bCP = document.getElementById("bCP");
    }

    getDatosPersona() {
        const datos = {
            dni: document.getElementById("dni").value,
            nombre: document.getElementById("nombre").value,
            apellido: document.getElementById("apellido").value,
            edad: document.getElementById("edad").value
        };

        document.getElementById("dni").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("edad").value = "";

        console.log("Datos obtenidos: ", datos);
        return datos;
    }

    crearPersona() {
        const container = document.getElementById("personaCreada");
        container.innerHTML = `
        <h3>Persona agregada</h3>`;
    }
}