import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducers';
import { Store } from '@ngrx/store';
import * as RecipeActions from '../recipe/store/recipe.actions';
import { Recipe } from '../shared/recipe.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipeListState: Observable<{ recipes: Recipe[] }>;
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.recipeListState = this.store.select('recipeList');
  }

  onDelete(index: number) {
    this.store.dispatch(new RecipeActions.DeleteRecipe(index));
  }

  onEdit(index: number) {
    this.store.dispatch(new RecipeActions.StartEdit(index));
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
