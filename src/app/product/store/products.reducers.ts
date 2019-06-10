import { Product } from '../product.model';
import * as ProductAction from './products.actions';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../ingredients.model';


export interface AppState {
  productsList: State;
}

export interface State {
  products: Product[];
  editedProduct: Product;
  editedProductIndex: number;

}

const initialState: State = {
  products: [
    new Product('Apple', 'https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg', 2.50, new Recipe('Apple Pie', 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps6086_HB133235C07_19_4b_WEB.jpg', [new Ingredient('Apple', 3)], [{ name: 'Cut the Apples' }, { name: 'Mix together' }], 900, 10)),
    new Product('Apple', 'https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg', 2.50, new Recipe('Apple Pie', 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/exps6086_HB133235C07_19_4b_WEB.jpg', [new Ingredient('Apple', 3)], [{ name: 'Cut the Apples' }, { name: 'Mix together' }], 900, 10)),
  ],
  editedProductIndex: -1,
  editedProduct: null
};

// export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
// export const UDPATE_PRODUCT = 'UDPATE_PRODUCT';
// export const FETCH_PRODUCT = 'FETCH_PRODUCT';

export function productReducer(state = initialState, action: ProductAction.ProductActions): State {
  switch (action.type) {
    case ProductAction.CREATE_PRODUCT: {
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
