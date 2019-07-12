import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { AngularMaterialModule } from '../shared/angular.material.module';

@NgModule({
  declarations: [
    RecipeComponent,
    EditRecipeComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RecipeRoutingModule
  ],
  exports: [],
  providers: [],
})
export class RecipeModule { }
