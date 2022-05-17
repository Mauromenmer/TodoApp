import { createReducer, on } from '@ngrx/store';
// import { increment, decrement, reset } from './counter.actions';
import { create, toggle, edit, borrar, toggleAll, clearCompleted } from './Todo.actions';
import { Todo } from './Models/Todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Comprar'),
  new Todo('Hacer tarea'),
];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, {text}) => [...state, new Todo(text)]),
  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)),
  on(clearCompleted, (state) => state.filter(todo => !todo.completed)),
  on(toggleAll, (state, {completed}) => state.map(todo => {
      return {
        ...todo,
        completed: completed
      }
    })
  ),
  on(toggle, (state, {id}) => {
    return state.map(todo =>{
      if (todo.id == id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }else{
        return todo;
      }
    })
  }),
  on(edit, (state, {id, text}) => {
    return state.map(todo =>{
      if (todo.id === id) {
        return {
          ...todo,
          text
        }
      }else{
        return todo;
      }
    })
  }),
);