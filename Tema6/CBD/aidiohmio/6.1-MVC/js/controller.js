class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Inicializa la aplicación
        this.init();
    }

    // Inicializa los eventos
    init() {
        this.view.taskForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita que el formulario recargue la página
            this.addTask();
        });

        this.view.taskList.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-btn")) {
                const taskId = parseInt(e.target.getAttribute("data-id"));
                this.removeTask(taskId);
            }
        });
    }

    // Agrega una tarea
    addTask() {
        const taskText = this.view.getTaskInput();
        if (taskText) {
            this.model.addTask(taskText);
            this.view.clearInput();
            this.updateView();
        }
    }

    // Elimina una tarea
    removeTask(id) {
        this.model.removeTask(id);
        this.updateView();
    }

    // Actualiza la vista
    updateView() {
        const tasks = this.model.getTasks();
        this.view.renderTasks(tasks);
    }
}

// Inicializa la aplicación cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    const model = new TaskModel();
    const view = new TaskView();
    const controller = new TaskController(model, view);
});