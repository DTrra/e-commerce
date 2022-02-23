export const products = [
    {
        id: 1,
        name: 'Pizzas',
        stock: 10,
        price: 899,
        img: 'muzza.jpg',
        description: 'Las mejores pizzas de todo el mundo',
        category: 'Pizzas',
    },
    {
        id: 2,
        name: 'Empanadas',
        stock: 12,
        price: 1500,
        img: 'empanada.jpg',
        description: 'Las mejores pizzas de todo el mundo',
        category: 'Empanadas',
    },
    {
        id: 3,
        name: 'Bebidas',
        stock: 7,
        price: 270,
        img: 'bebidas.jpg',
        description: 'Las mejores pizzas de todo el mundo',
        category: 'Bebidas',
    },
    {
        id: 4,
        name: 'Promociones',
        stock: 4,
        price: 199,
        img: 'promo.jpg',
        description: 'Las mejores pizzas de todo el mundo',
        category: 'Promociones',
    },
];

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 5000);
});