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
    FormsModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
})
export class ProductModule { }
