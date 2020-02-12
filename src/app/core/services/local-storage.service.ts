import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getItem(key: string): any {
    return window.localStorage.getItem(key);
  }

  setItem(key: string, item: any): void {
    window.localStorage.setItem(key, item);
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }
}
