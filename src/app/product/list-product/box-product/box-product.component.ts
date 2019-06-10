import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product.model';

@Component({
  selector: 'app-box-product',
  templateUrl: './box-product.component.html',
  styleUrls: ['./box-product.component.css']
})
export class BoxProductComponent implements OnInit {

  @Input() item: Product;
  showDetails: boolean;
  constructor() { }

  ngOnInit() {
    this.showDetails = false;
  }

}
