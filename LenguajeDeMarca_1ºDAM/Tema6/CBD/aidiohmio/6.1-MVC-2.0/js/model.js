class TaskModel {
    constructor() {
        this.tasks = [];
    }

    addTask(nombre, descripcion) {
        const newTask = {
            id: Date.now(),
            nombre: nombre,
            descripcion: descripcion,
            estado: "Pendiente",
            fecha: new Date().toLocaleString()
        };
        this.tasks.push(newTask);
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    toggleTaskState(id) {
        this.tasks = this.tasks.map(task => 
            task.id === id ? { ...task, estado: task.estado === "Pendiente" ? "Acabado" : "Pendiente" } : task
        );
    }

    getTasks() {
        return this.tasks;
    }
}