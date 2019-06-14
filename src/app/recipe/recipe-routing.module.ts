import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeComponent } from './recipe.component';

const routes: Routes = [
  { path: 'recipe', component: RecipeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
