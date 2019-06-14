import { Action } from '@ngrx/store';
import { Recipe } from 'src/app/shared/recipe.model';

export const ADD_RECIPE = 'ADD_RECIPE';
export const DELETE_RECIPE = 'DELETE_RECIPE';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export const FETCH_RECIPE = 'FETCH_RECIPE';
export const STORE_RECIPE = 'STORE_RECIPE';

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public recipe: Recipe) { }
}

export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;
  constructor(public removeIndex: number) { }
}

export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public updatedRecipe: Recipe) { }
}

export class StartEdit implements Action {
  readonly type = START_EDIT;
  constructor(public editIndex: number) { }
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export type RecipeActions
  = AddRecipe
  | DeleteRecipe
  | UpdateRecipe
  | StartEdit
  | StopEdit;
