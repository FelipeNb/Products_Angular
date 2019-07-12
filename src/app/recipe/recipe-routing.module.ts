import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipeComponent } from './recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

const routes: Routes = [
  {
    path: 'recipe', component: RecipeComponent, children:
      [
        { path: 'edit', component: EditRecipeComponent },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
