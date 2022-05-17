import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filtrosValidos } from 'src/app/Filter/Filter.actions';
import { AppState } from '../../app.reducer';
import { setfilter } from '../../Filter/Filter.actions';
import { clearCompleted } from '../Todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  public currentFilter: filtrosValidos = 'todos';
  public filters: filtrosValidos[] = ['todos', 'pendientes', 'completados'];
  public pend: number = 0;

  ngOnInit(): void {
    // this.store.select('filter').subscribe(filter =>  this.currentFilter = filter);
    this.store.subscribe(state =>  {
      this.currentFilter = state.filter;

      this.pend = state.todos.filter(todo => !todo.completed).length;



    });
  }

  public setFilter(filter: filtrosValidos){
    this.store.dispatch(setfilter({filtro: filter}));
  }


  clearCompletedH(){
    this.store.dispatch(clearCompleted());
  }

}
