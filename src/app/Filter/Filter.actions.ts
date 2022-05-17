import { createAction, props } from "@ngrx/store";

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export const setfilter = createAction(
    '[FILTER] Set Filter',
    props<{filtro:filtrosValidos}>()
);

