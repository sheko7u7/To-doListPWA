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

  deferredPrompt: any;
  showInstallButton = false;

  constructor() {
    window.addEventListener('beforeinstallprompt', (event: any) => {
      event.preventDefault();
      this.deferredPrompt = event;
      this.showInstallButton = true;
    });
  }

  installPWA() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        this.deferredPrompt = null;
        this.showInstallButton = false;
      });
    }
  }
}
