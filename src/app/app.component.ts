import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public tittle: String="Minhas Tarefas";
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    });
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

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length;
    this.todos.push(new Todo(title,false,id))
  }
}
