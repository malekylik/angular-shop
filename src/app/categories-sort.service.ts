import { Injectable } from '@angular/core';

import { Category } from '../Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesSortService {

  constructor() { }

  sortCategories(catigories: Category[], property: string) {
    catigories.forEach((category) => {
      if (property === 'name') {
        category.products.sort((l, r) => l.name.localeCompare(r.name));
      } else if (property === 'price') {
        category.products.sort((l, r) => l.price - r.price);
      }
    });
  }
}
