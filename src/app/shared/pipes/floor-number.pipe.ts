import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'floorNumber'
})
export class FloorNumberPipe implements PipeTransform {
  transform(value: number): number {
    return Math.floor(value);
  }
}
