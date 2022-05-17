import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Crear Todo',
    props<{text:string}>()
);

export const toggle = createAction(
    '[TODO] Toogle Todo',
    props<{id:number}>()
);

export const edit = createAction(
    '[TODO] Editar Todo',
    props<{id:number, text: string}>()
);
export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{id:number}>()
);

//toggle all
//Completado
export const toggleAll = createAction(
    '[TODO] Marcar Todo',
    props<{completed:boolean}>()
);


export const clearCompleted = createAction(
    '[FILTER] Clear Completed'
);
