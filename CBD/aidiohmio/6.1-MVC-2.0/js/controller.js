class TaskController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    init() {
        this.view.taskForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.addTask();
        });

        this.view.taskList.addEventListener("click", (e) => {
            if (e.target.classList.contains("botonEliminar")) {
                const taskId = parseInt(e.target.getAttribute("data-id"));
                this.removeTask(taskId);
            }

            if (e.target.classList.contains("cambiarEstado")) {
                const taskId = parseInt(e.target.getAttribute("data-id"));
                this.toggleTaskState(taskId);
            }
        });
    }

    addTask() {
        const { nombre, descripcion } = this.view.getTaskInput();
        if (nombre && descripcion) {
            this.model.addTask(nombre, descripcion);
            this.view.clearInput();
            this.updateView();
        }
    }

    removeTask(id) {
        this.model.removeTask(id);
        this.updateView();
    }

    toggleTaskState(id) {
        this.model.toggleTaskState(id);
        this.updateView();
    }

    updateView() {
        const tasks = this.model.getTasks();
        this.view.renderTasks(tasks);
        console.log(tasks);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const model = new TaskModel();
    const view = new TaskView();
    const controller = new TaskController(model, view);
});