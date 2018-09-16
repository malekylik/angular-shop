import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../../Product';
import { CATEGORIES_WITH_CHECKED } from '../../../categories';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const category = this.route.snapshot.paramMap.get('category');
    this.product = CATEGORIES_WITH_CHECKED.find(_category => _category.name.toLowerCase() === category)
    .products.find(product => product.id === id);
  }
}
