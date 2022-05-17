import { createReducer, on } from '@ngrx/store';
import { setfilter, filtrosValidos } from './Filter.actions';

export const initialState: filtrosValidos = 'todos';

export const _filterReducer = createReducer<filtrosValidos>(
  initialState,
  on(setfilter, (state, { filtro }) => filtro),
  
);