import { Component, OnInit, Input } from '@angular/core';

import { CategoriesSortService } from '../categories-sort.service';
import { Category } from '../../Category';

@Component({
  selector: 'app-sort-control',
  templateUrl: './sort-control.component.html',
  styleUrls: ['./sort-control.component.css']
})
export class SortControlComponent implements OnInit {

  @Input()
  categories: Category[];
  sortOptions: string[];
  selectedSortOption: string;

  constructor(private categoriesSortService: CategoriesSortService) {
    this.sortOptions = [
      'price',
      'name',
    ];
  }

  ngOnInit() {
    this.sort(this.sortOptions[0]);
  }

  sort(sortOption) {
    if (this.selectedSortOption !== sortOption) {
    this.categoriesSortService.sortCategories(this.categories, sortOption);
    this.selectedSortOption = sortOption;
    }
  }
}
