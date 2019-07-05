import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './login/login.component';
import { ProductModule } from './product/product.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { ShopModule } from './shop/shop.module';
import { ProfileComponent } from './profile/profile.component';
import { RecipeModule } from './recipe/recipe.module';
import { AngularMaterialModule } from './shared/angular.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CoreModule,
    ProductModule,
    ShopModule,
    RecipeModule,
    AngularMaterialModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
