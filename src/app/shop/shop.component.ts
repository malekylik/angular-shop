import { Component, OnInit } from '@angular/core';

import { CategoryWithChecked } from '../../Category';
import { CATEGORIES_WITH_CHECKED } from '../../categories';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  categories: CategoryWithChecked[] = CATEGORIES_WITH_CHECKED;

  ngOnInit() {
  }

}
