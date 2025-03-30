class Tarea{
    constructor(id, descripcion, fecha, completada){
        this.id = id;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.completada = completada;
    }
}

class CRUDTareas{
    constructor(){
        this.tareas = [];
    }

    addTarea(tarea){
        this.tareas.push(tarea)
    }

}