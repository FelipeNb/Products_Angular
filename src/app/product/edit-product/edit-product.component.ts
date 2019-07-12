import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Product } from '../../shared/product.model';
import * as fromApp from '../../store/app.reducers';
import * as ProductAction from '../store/products.actions';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {

  btnLabel = 'Create';
  editMode = false;
  editProduct: Product;
  subscription: Subscription;
  productForm: FormGroup;
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscription = this.store.select('productList').subscribe(
      data => {
        this.editMode = data.editedProductIndex != -1;
        if (this.editMode) {
          this.editProduct = data.editedProduct;
          this.btnLabel = 'Edit';
        }
      }
    );
    this.initForm();
  }

  ngOnDestroy() {
    this.store.dispatch(new ProductAction.StopEdit());
    this.subscription.unsubscribe();
  }

  initForm() {
    let productName: string;
    let productPrice: number;
    let productImg = '';

    if (this.editMode) {
      productName = this.editProduct.name;
      productPrice = +this.editProduct.price;
      productImg = this.editProduct.img;

    }

    this.productForm = new FormGroup({
      productName: new FormControl(productName, Validators.required),
      productImg: new FormControl(productImg, Validators.required),
      productPrice: new FormControl(productPrice, Validators.required),
    });
  }

  onSubmit() {
    const productName = this.productForm.value.productName;
    const productImg = this.productForm.value.productImg;
    const productType = this.productForm.value.productType;
    const productPrice = this.productForm.value.productPrice;

    const newProduct = new Product(productName, productImg, productType, productPrice, new Date(), new Date());

    if (this.editMode) {
      newProduct.dateUpdate = this.editProduct.dateInserted;
      newProduct.id = this.editProduct.id;
      this.store.dispatch(new ProductAction.UpdateProduct(newProduct));
    } else {
      delete newProduct.id;
      this.store.dispatch(new ProductAction.RequestCreateProduct(newProduct));
    }
    this.router.navigate(['product']);
  }
}
