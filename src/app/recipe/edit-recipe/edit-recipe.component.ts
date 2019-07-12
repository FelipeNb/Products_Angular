import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit, OnDestroy {

  btnLabel = 'Create';
  editMode = false;
  editRecipe: Recipe;
  subscription: Subscription;
  recipeForm: FormGroup;
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subscription = this.store.select('recipeList').subscribe(
      data => {

      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initForm() {

  }

  onSubmit() {

  }

  getIngredientsControls() {

  }

  onDeleteIngredient(index: number) {

  }

  onAddIngredient() {

  }

  getHowPrepareControls() {

  }

  onDeleteStep(index: number) {

  }

  onAddStep() {

  }


}
