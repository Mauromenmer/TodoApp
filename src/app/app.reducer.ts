import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { filtrosValidos } from "./Filter/Filter.actions";
import { _filterReducer } from "./Filter/Filter.reducer";
import { Todo } from "./Todos/Models/Todo.model";
import { todoReducer } from "./Todos/Todo.reducer";

export interface AppState{
    todos: Todo[],
    filter: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: _filterReducer
    
}