class Controlador {
    constructor() {
        this.modelo = new Modelo();
        this.vistaCrearPersona = new VistaCrearPersona();
        this.init();
    }

    init() {
        const crearPersonaForm = document.getElementById("crearPersonaForm");
        crearPersonaForm.addEventListener("submit", (event) => {
            event.preventDefault();
            this.crearPersona();
        });
    }

    crearPersona() {
        const datosPersona = this.vistaCrearPersona.getDatosPersona();
        this.modelo.agregarPersona(
            datosPersona.dni,
            datosPersona.nombre,
            datosPersona.apellido,
            datosPersona.edad
        );
        this.vistaCrearPersona.crearPersona();
    }
}