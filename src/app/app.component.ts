import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoListComponent } from "./todolist/todolist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, TodoListComponent],
  template: `<app-todolist></app-todolist>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoListPWA';
}
