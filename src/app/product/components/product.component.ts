import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // Если передавать отдельно каждое свойство, то инпутов будет много
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

  onBuy() {
    console.log(`You bought ${this.name}`);
  }

}
