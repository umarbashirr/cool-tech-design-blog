import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberTransform',
})
export class NumberTransformPipe implements PipeTransform {
  transform(value: any): any {
    let result = value < 10 ? '0' + value : value;
    return result;
  }
}
