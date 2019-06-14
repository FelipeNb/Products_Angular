import * as RecipeActions from '../store/recipe.actions';
import { Recipe } from 'src/app/shared/recipe.model';

export interface State {
  recipes: Recipe[];
  editedRecipe: Recipe;
  editedRecipeIndex: number;
}

const initialState: State = {
  recipes: [new Recipe(
    'Apple Pie',
    'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps6086_HB133235C07_19_4b_WEB.jpg',
    [
      {
        ingredient: 'Apple',
        amount: 3
      }
    ],
    [
      { name: 'Cut the Apples' },
      { name: 'Mix together' }
    ],
    900,
    10)],
  editedRecipe: null,
  editedRecipeIndex: -1
};

export function reducer(state = initialState, action: RecipeActions.RecipeActions): State {
  switch (action.type) {
    case RecipeActions.ADD_RECIPE: {
      return {
        ...state,
        recipes: [...state.recipes, action.recipe]
      };
    }
    case RecipeActions.DELETE_RECIPE: {
      const oldRecipes = [...state.recipes];
      oldRecipes.splice(action.removeIndex, 1);
      return {
        ...state,
        recipes: oldRecipes
      };
    }
    case RecipeActions.START_EDIT: {
      return {
        ...state,
        editedRecipe: state.recipes[action.editIndex],
        editedRecipeIndex: action.editIndex
      };
    }
    case RecipeActions.STOP_EDIT: {
      return {
        ...state,
        editedRecipe: null,
        editedRecipeIndex: -1
      };
    }
    case RecipeActions.UPDATE_RECIPE: {
      const updatedRecipe = state.recipes[state.editedRecipeIndex];
      const newRecipe = {
        ...updatedRecipe,
        ...action.updatedRecipe
      };
      const newRecipes = [...state.recipes];
      newRecipes[state.editedRecipeIndex] = newRecipe;
      return {
        ...state,
        recipes: newRecipes
      };
    }
    default: {
      return state;
    }
  }
}
