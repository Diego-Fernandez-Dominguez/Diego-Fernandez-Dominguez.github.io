class Modelo {
    constructor() {
        this.personas = new Array();
        this.entidad = new Entidad(); // Assuming Entidad is defined elsewhere
    }

    agregarPersona(dni, nombre, apellido, edad) { // Fixed parameter name
        let persona = new Entidad(dni, nombre, apellido, edad); // Fixed parameter name
        this.personas.push(persona);
        console.log(this.personas);
    }

    eliminarPersona(dni) {
        let sePudo = false;

        while (!sePudo && this.personas.length > 0) {
            let persona = this.personas.pop();
            if (persona.dni == dni) {
                sePudo = true;
            }
        }
        return sePudo;
    }
}