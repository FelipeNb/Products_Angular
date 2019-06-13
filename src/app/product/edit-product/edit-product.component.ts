import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Product } from '../../shared/product.model';
import * as fromApp from '../../store/app.reducers';
import * as ProductAction from '../store/products.actions';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../ingredients.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {

  @ViewChild('f', { static: false }) slForm: NgForm;
  btnLabel = 'Create';
  editMode = false;
  editProduct: Product;
  subscription: Subscription;
  productForm: FormGroup;
  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.subscription = this.store.select('productList').subscribe(
      data => {
        this.editMode = data.editedProductIndex != -1;
        if (this.editMode) {
          this.editProduct = data.editedProduct;
          this.btnLabel = 'Edit';
        }
      }
    );
    this.initForm();
  }

  ngOnDestroy() {
    this.store.dispatch(new ProductAction.StopEdit());
    this.subscription.unsubscribe();
  }

  initForm() {
    let productName: string;
    let productPrice: number;
    let productImg: string = '';

    let recipeIngredients = new FormArray([]);
    let recipeHowPrepare = new FormArray([]);

    let recipeName: string;
    let recipeImg: string = '';
    let recipeKcal: number;
    let recipePortion: number;

    if (this.editMode) {
      productName = this.editProduct.name;
      productPrice = +this.editProduct.price;
      productImg = this.editProduct.img;

      recipeIngredients = new FormArray([]);

      this.editProduct.recipe.ingredients.forEach(element => {
        recipeIngredients.push(new FormGroup({
          name: new FormControl(element.name, Validators.required),
          amount: new FormControl(element.name, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        }));
      });

      recipeHowPrepare = new FormArray([]);

      this.editProduct.recipe.howPrepare.forEach(element => {
        recipeHowPrepare.push(new FormGroup({
          name: new FormControl(element.name, Validators.required),
        }));
      });

      recipeName = this.editProduct.recipe.name;
      recipeImg = this.editProduct.recipe.img;
      recipeKcal = +this.editProduct.recipe.kcal;
      recipePortion = +this.editProduct.recipe.portion;
    }

    this.productForm = new FormGroup({
      productName: new FormControl(productName, Validators.required),
      productImg: new FormControl(productImg, Validators.required),
      productPrice: new FormControl(productPrice, Validators.required),

      productRecipe: new FormGroup({
        recipeName: new FormControl(recipeName, Validators.required),
        recipeImg: new FormControl(recipeImg, Validators.required),
        recipeKcal: new FormControl(recipeKcal, Validators.required),
        recipePortion: new FormControl(recipePortion, Validators.required),
        howPrepare: recipeHowPrepare,
        ingredients: recipeIngredients,
      }),
    });
  }

  onAddIngredient() {
    (this.productForm.get('productRecipe').get('ingredients') as FormArray).push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    }));
  }

  onDeleteIngredient(ingredientIndex: number) {
    (this.productForm.get('productRecipe').get('ingredients') as FormArray).removeAt(ingredientIndex);
  }

  onDeleteStep(stepIndex: number) {
    (this.productForm.get('productRecipe').get('howPrepare') as FormArray).removeAt(stepIndex);
  }

  onAddStep() {
    (this.productForm.get('productRecipe').get('howPrepare') as FormArray).push(new FormGroup({
      name: new FormControl(null, Validators.required)
    }));
    console.log(this.productForm.value);
  }

  getIngredientsControls() {
    return (this.productForm.get('productRecipe').get('ingredients') as FormArray).controls;
  }

  getHowPrepareControls() {
    return (this.productForm.get('productRecipe').get('howPrepare') as FormArray).controls;
  }

  onSubmit() {
    const productName = this.productForm.value.productName;
    const productImg = this.productForm.value.productImg;
    const productPrice = this.productForm.value.productPrice;
    const productRecipe = this.productForm.value.productRecipe;
    const recipeName = productRecipe.recipeName;
    const recipeImg = productRecipe.recipeImg;
    const recipeKcal = productRecipe.recipeKcal;
    const recipePortion = productRecipe.recipePortion;
    const howPrepare = productRecipe.howPrepare as { name: string }[];
    const ingredients = productRecipe.ingredients as Ingredient[];
    const recipe = new Recipe(recipeName, recipeImg, ingredients, howPrepare, recipeKcal, recipePortion);
    const newProduct = new Product(productName, productImg, productPrice, recipe);

    if (this.editMode) {
      this.store.dispatch(new ProductAction.UpdateProduct(newProduct));
    } else {
      this.store.dispatch(new ProductAction.CreateProduct(newProduct));
    }
    this.router.navigate(['product']);
  }
}
