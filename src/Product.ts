export class Product {
    constructor(
        public id: number,
        public sizes: string[],
        public colors: string[],
        public price: number,
        public name: string,
        public category: string,
        public images: {
            small: string,
            big: string
        }
    ) {

    }
}
