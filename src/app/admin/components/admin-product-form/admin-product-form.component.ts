import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductModel } from './../../../products/models/product.model';
import { ProductsFacade } from 'src/app/core/@ngrx/products/products.facade';
import { RouterFacade } from 'src/app/core/@ngrx/router/router.facade';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  product: ProductModel;
  isEdit = true;

  constructor(
    private productsFacade: ProductsFacade,
    private activatedRoute: ActivatedRoute,
    private routerFacade: RouterFacade) { }

  ngOnInit() {
    this.productsFacade.selectedProductByUrl.subscribe((product: ProductModel) => {
      this.product = { ...product };
      this.isEdit = this.activatedRoute.snapshot.url.length === 3;
    });
  }

  onSave() {
    this.productsFacade.updateProduct({ product: this.product });
  }

  onDelete() {
    this.productsFacade.deleteProduct({ product: this.product });
  }
}
