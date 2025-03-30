class TaskView {
    constructor() {
        this.app = document.getElementById("app");
        this.taskForm = document.getElementById("formulario-tarea");
        this.taskInput = document.getElementById("entrada-tarea");
        this.descInput = document.getElementById("entrada-descripcion");
        this.taskList = document.getElementById("lista-tareas");
    }

    getTaskInput() {
        return {
            nombre: this.taskInput.value,
            descripcion: this.descInput.value
        };
    }

    clearInput() {
        this.taskInput.value = "";
        this.descInput.value = "";
    }

    renderTasks(tasks) {
        this.taskList.innerHTML = "";
        tasks.forEach(task => {
            const row = document.createElement("tr");
            row.className = task.estado.toLowerCase(); 
            row.innerHTML = `
                <td>${task.nombre}</td>
                <td>${task.descripcion}</td>
                <td>${task.fecha}</td>
                <td>${task.estado}</td>
                <td>
                    <button class="botonEliminar" data-id="${task.id}">Eliminar</button>
                    <button class="cambiarEstado" data-id="${task.id}">Cambiar Estado</button>
                </td>
            `;
            this.taskList.appendChild(row);
        });
    }
}