import { Component, OnInit } from '@angular/core';

import { Category } from '../models/category';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  previousPrices: number[];

  private tags: string[];
  private category: Category;

  get categoryString(): string {
    return Category[this.category];
  }

  get tagsJoined(): string {
    return this.tags.join(', ');
  }

  ngOnInit() {
    this.name = 'some name';
    this.description = 'some description';
    this.price = 20;
    this.category = Category.Category2;
    this.isAvailable = true;
    this.tags = ['tag1', 'tag2', 'tag3'];
    this.previousPrices = [21, 22, 21, 23];
  }
}
