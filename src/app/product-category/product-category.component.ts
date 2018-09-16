import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../Product';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  @Input() products: Product[];
  @Input() name: string;
  @Input() right: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
