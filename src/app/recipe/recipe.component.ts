import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  formRecipe: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  initForm() {
    this.formRecipe = new FormGroup({

    });
  }

  onSubmit() {

  }
}
