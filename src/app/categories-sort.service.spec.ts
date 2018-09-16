import { TestBed, inject } from '@angular/core/testing';

import { CategoriesSortService } from './categories-sort.service';

describe('CategoriesSortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesSortService]
    });
  });

  it('should be created', inject([CategoriesSortService], (service: CategoriesSortService) => {
    expect(service).toBeTruthy();
  }));
});
