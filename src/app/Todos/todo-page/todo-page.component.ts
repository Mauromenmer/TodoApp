import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggleAll } from '../Todo.actions';
@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  public completeds: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  public toggleAlls(){
    this.completeds = !this.completeds;

    this.store.dispatch(toggleAll({completed: this.completeds }));


  }

}
