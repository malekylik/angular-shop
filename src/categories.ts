import { Category, CategoryWithChecked } from './Category';
import { PRODUCTS_MEN, PRODUCTS_WOMEN, PRODUCTS_CHILDREN } from './products';

const MEN: Category = new Category('MEN', PRODUCTS_MEN);

const WOMEN: Category = new Category('WOMEN', PRODUCTS_WOMEN);

const CHILDREN: Category = new Category('CHILDREN', PRODUCTS_CHILDREN);

const CATEGORIES: Category[] = [
    MEN,
    WOMEN,
    CHILDREN,
];

const CATEGORIES_WITH_CHECKED: CategoryWithChecked[] = CATEGORIES.map((category) => {
    const _category = new CategoryWithChecked(category.name, category.products);
    _category.checked = false;
    return _category;
  });

export { CATEGORIES, CATEGORIES_WITH_CHECKED };
