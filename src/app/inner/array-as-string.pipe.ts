import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayAsString'
})
export class ArrayAsStringPipe implements PipeTransform {

  transform(array: any[]): string {
    return array.join(', ');
  }
}
