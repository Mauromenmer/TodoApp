import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../Models/Todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toggle,edit, borrar } from '../Todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputPhisic') txtInputFisico!: ElementRef;


  public chkCompleted!: FormControl;
  public txtInput!: FormControl;

  public editing: boolean = false;

  constructor(private store: Store<AppState>) { 
  }
  
  ngOnInit(): void {
    this.chkCompleted = new FormControl(false);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe(valor => {
      this.store.dispatch(toggle({id: this.todo.id}));
    })
  }
  
  public edit(){
    this.editing = true;
    this.txtInput.setValue(this.todo.text);

    setTimeout(() => {

      this.txtInputFisico.nativeElement.select();
      
    }, 1);

  }

  public finish(){
    this.editing = false;
    if (this.txtInput.invalid) {return;}
    if (this.txtInput.value == this.todo.text) {return;}

    this.store.dispatch(edit({id: this.todo.id, text: this.txtInput.value}));
  }


  public delete(){
    this.store.dispatch(borrar({id: this.todo.id}));
  }
}
