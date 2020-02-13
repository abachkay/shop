import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], path: string, isDesc: boolean): any {
    if (!value || !value.length) {
      return value;
    }

    return value.sort((x, y) => isDesc
      ? this.getCompareLogic(this.getFieldByPath(y, path), this.getFieldByPath(x, path))
      : this.getCompareLogic(this.getFieldByPath(x, path), this.getFieldByPath(y, path)));
  }

  private getCompareLogic(x: any, y: any) {
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  }

  private getFieldByPath(obj: any, path: string) {
    const nodes = path.split('/');

    return nodes.reduce((acc, current) => acc[current], obj);
  }
}
