import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { AngularMaterialModule } from '../shared/angular.material.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/shop.reducers';
import { ShopEffects } from './store/shop.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    AngularMaterialModule,
    StoreModule.forFeature('shop', reducer),
    EffectsModule.forFeature([ShopEffects])
  ],
  exports: [],
  providers: [],
})
export class ShopModule { }
