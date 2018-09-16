import { Product } from './Product';

export class Category {
    constructor(public name: string, public products: Product[]) {}

    toString() {
        return this.name;
    }
}

export class CategoryWithChecked extends Category {
    constructor(public name: string, public products: Product[], public checked: boolean = false) {
        super(name, products);
    }
}
