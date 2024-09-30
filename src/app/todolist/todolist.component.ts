import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class TodoListComponent {
  tasks: Task[] = [];
  newTaskTitle: string = '';
  editTaskId: number | null = null;

  addTask() {
    if (this.newTaskTitle.trim() === '') return;

    if (this.editTaskId !== null) {
      // Actualiza la tarea existente
      const taskIndex = this.tasks.findIndex(task => task.id === this.editTaskId);
      if (taskIndex > -1) {
        this.tasks[taskIndex].title = this.newTaskTitle;
        this.tasks[taskIndex].status = 'Pendiente'; // Reinicia el estado
      }
      this.editTaskId = null; // Limpiamos el ID de edición
    } else {
      // Crea una nueva tarea
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle,
        status: 'Pendiente' // Estado inicial
      };
      this.tasks.push(newTask);
    }

    this.newTaskTitle = ''; // Limpiamos el input
  }

  changeStatus(task: Task) {
    task.status = task.status === 'Pendiente' ? 'Completado' : task.status === 'Completado' ? 'En progreso' : 'Pendiente';
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  editTask(task: Task) {
    this.newTaskTitle = task.title; // Carga el título de la tarea en el input
    this.editTaskId = task.id; // Guarda el ID de la tarea a editar
  }
}

