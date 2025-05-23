class TaskView {
    constructor() {
        this.app = document.getElementById("app");
        this.taskForm = document.getElementById("task-form");
        this.taskInput = document.getElementById("task-input");
        this.taskList = document.getElementById("task-list");
    }

    // Obtiene el valor del input
    getTaskInput() {
        return this.taskInput.value;
    }

    // Limpia el input
    clearInput() {
        this.taskInput.value = "";
    }

    // Renderiza las tareas en una tabla
    renderTasks(tasks) {
        this.taskList.innerHTML = ""; // Limpia la tabla antes de renderizar
        tasks.forEach(task => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${task.text}</td>
                <td>
                    <button class="delete-btn" data-id="${task.id}">Eliminar</button>
                </td>
            `;
            this.taskList.appendChild(row);
        });
    }
}