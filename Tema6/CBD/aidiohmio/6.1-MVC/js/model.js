class TaskModel {
    constructor() {
        this.tasks = []; // Array de objetos para simular una base de datos
    }

    // Agrega una nueva tarea
    addTask(task) {
        const newTask = {
            id: Date.now(), // Usamos el timestamp como ID único
            text: task,
            completed: false,
        };
        this.tasks.push(newTask);
    }

    // Elimina una tarea por su ID
    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    // Obtiene todas las tareas
    getTasks() {
        return this.tasks;
    }
}