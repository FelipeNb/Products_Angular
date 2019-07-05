import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { AngularMaterialModule } from '../shared/angular.material.module';

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    AngularMaterialModule
  ],
  exports: [],
  providers: [],
})
export class ShopModule { }
