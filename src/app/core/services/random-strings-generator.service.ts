import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomStringsGeneratorService {
  private characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  constructor(private length: number) { }

  generateString() {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      result += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    }

    return result;
  }
}
