import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'liste',
  standalone: true
})
export class ListePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
