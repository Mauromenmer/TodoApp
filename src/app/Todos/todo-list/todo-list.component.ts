import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../Models/Todo.model';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from 'src/app/Filter/Filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  public currentFilter: filtrosValidos = 'todos';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    // this.store.select('todos').subscribe(todos  => this.todos = todos);

    this.store.subscribe(({todos, filter}) => {
      this.todos = todos;
      this.currentFilter = filter;
    })

  }

}
