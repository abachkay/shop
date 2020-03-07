import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { pluck } from 'rxjs/operators';

import { ProductModel } from './../../../products/models/product.model';
import { ProductsService } from './../../../products/services/products.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  product: ProductModel;
  isEdit = true;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.data.pipe(pluck('product')).subscribe((product: ProductModel) => {
      this.product = { ...product };
      this.isEdit = this.activatedRoute.snapshot.url.length === 3;
    });
  }

  onSave() {
    this.productsService.upsertProduct(this.product).subscribe(_ =>
      this.router.navigateByUrl('/admin/products'));
  }

  onDelete() {
    this.productsService.deleteProduct(this.product.id).subscribe(_ =>
      this.router.navigateByUrl('/admin/products'));
  }
}
