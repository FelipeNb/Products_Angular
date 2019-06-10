import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../recipe.model';

@Component({
  selector: 'app-detail-box-product',
  templateUrl: './detail-box-product.component.html',
  styleUrls: ['./detail-box-product.component.css']
})
export class DetailBoxProductComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
