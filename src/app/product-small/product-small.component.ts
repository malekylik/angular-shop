import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../../Product';

@Component({
  selector: 'app-product-small',
  templateUrl: './product-small.component.html',
  styleUrls: ['./product-small.component.css']
})
export class ProductSmallComponent implements OnInit {

  @Input() product: Product;
  selectedSize: string;

  constructor() { 
  }

  get activeSize(): string {
    return this.product.sizes.length === 1 ? this.product.sizes[0] : 'SIZE';
  }

  ngOnInit() {
    this.selectedSize = this.product.sizes[0];
  }

}
