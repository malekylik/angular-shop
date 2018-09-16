import { Product } from './Product';

const PRODUCTS_MEN = [
    new Product(
        1,
        ['XL', 'X'],
        ['#165eb9', '#ffe637', '#535253'],
        5,
        'T-SHIRT',
        'men',
        {
            small: './assets/img/t-shirt_small.png',
            big: './assets/img/t-shirt_big.png',
        }
    ),
    new Product(
        2,
        ['XL', 'X'],
        [],
        30,
        'PANTS FORCLAZ',
        'men',
        {
            small: './assets/img/pants_forclaz_small.png',
            big: './assets/img/pants_forclaz_small.png',
        }
    ),
    new Product(
        3,
        ['10LITRI'],
        [],
        60,
        'BACKPACK',
        'men',
        {
            small: './assets/img/backpack_small.png',
            big: './assets/img/backpack_small.png',
        }
    ),
    new Product(
        4,
        ['10LITRI'],
        [],
        30,
        'ORGANIC SHAMPOO',
        'men',
        {
            small: './assets/img/organic_shampoo_small.png',
            big: './assets/img/organic_shampoo_small.png',
        }
    ),
];

const PRODUCTS_WOMEN = [
    new Product(
        5,
        ['XL', 'X'],
        [],
        60,
        'GIACKET',
        'women',
        {
            small: './assets/img/giacket_small.png',
            big: './assets/img/giacket_small.png',
        }
    ),
    new Product(
        6,
        ['XL', 'X'],
        [],
        80,
        'TREKKING SHOES',
        'women',
        {
            small: './assets/img/trekking_shoes_small.png',
            big: './assets/img/trekking_shoes_small.png',
        }
    ),
    new Product(
        7,
        ['XL', 'X'],
        ['#d3a7ac', '#ffffff'],
        20,
        'T-SHIRT',
        'women',
        {
            small: './assets/img/t-shirt_women_small.png',
            big: './assets/img/t-shirt_women_small.png',
        }
    ),
    new Product(
        8,
        ['XL', 'X'],
        ['#d3a7ac'],
        120,
        'Satavarex Pack',
        'women',
        {
            small: './assets/img/satavarex_pack.png',
            big: './assets/img/satavarex_pack.png',
        }
    ),
];

const PRODUCTS_CHILDREN = [
];

export { PRODUCTS_MEN, PRODUCTS_WOMEN, PRODUCTS_CHILDREN };
