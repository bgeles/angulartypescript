import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];

  public tittle: String="Minhas Tarefas"

  constructor() {
    this.todos.push(new Todo('passear com cachorro',false, 1));
    this.todos.push(new Todo('ir ao supermercado',false, 2));    
    this.todos.push(new Todo('cortar o cabelo',true, 3));
  }

  remove(todo : Todo){
    const index = this.todos.indexOf(todo);
    if (index !== -1){
      this.todos.splice(index,1);
    }
  }

  markAsDone(todo : Todo){
    todo.done = true;
  }

  markAsUndone(todo : Todo){
    todo.done = false;
  }

}
