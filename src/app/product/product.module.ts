import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductComponent } from './product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoxProductComponent } from './list-product/box-product/box-product.component';
import { DetailBoxProductComponent } from './list-product/box-product/detail-box-product/detail-box-product.component';
import { ProductRoutingModule } from './products-routing.module';
import { ConfigureProductComponent } from './configure-product/configure-product.component';
import { AngularMaterialModule } from '../shared/angular.material.module';
import { ProductsEffects } from './store/products.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { reducer } from './store/products.reducers';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    ProductComponent,
    ListProductComponent,
    EditProductComponent,
    BoxProductComponent,
    DetailBoxProductComponent,
    ConfigureProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ProductRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([ProductsEffects])
  ],
  exports: [],
  providers: [],
})
export class ProductModule { }
