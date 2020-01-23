import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'average'
})
export class AveragePipe implements PipeTransform {

  transform(items: any[]): number {
    return items.reduce((previous, current) => current += previous) / items.length;
  }

}
