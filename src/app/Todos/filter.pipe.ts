import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../Filter/Filter.actions';
import { Todo } from './Models/Todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], filter: filtrosValidos): Todo[] {
    
    console.log(value);
    
    switch (filter) {
      case 'completados':
        return value.filter(todo => todo.completed);
      case 'pendientes':
        return value.filter(todo => !todo.completed);
      default:
        return value
    }
    
  }

}
