import { Component, OnInit, Input } from '@angular/core';

import { CategoryWithChecked } from '../../Category';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  categories: CategoryWithChecked[];

  constructor() { }

  ngOnInit() {
  }

  seeAllProducts() {
    this.categories.forEach(category => {
      category.checked = true;
    });
  }
}
