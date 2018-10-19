import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        sku: 1,
        name: "Apple",
        image: "img",
        categories: ["Fruit"],
        price: 10,
        date: "21-10-2018"
      },
      {
        sku: 2,
        name: "Orange",
        image: "img",
        categories: ["Fruit"],
        price: 10,
        date: "21-10-2018"
      },
      {
        sku: 3,
        name: "Avocado",
        image: "img",
        categories: ["Fruit"],
        price: 10,
        date: "21-10-2018"
      },
      {
        sku: 4,
        name: "Banana",
        image: "img",
        categories: ["Fruit"],
        price: 10,
        date: "21-10-2018"
      },
      {
        sku: 5,
        name: "Strawberries",
        image: "img",
        categories: ["Fruit"],
        price: 10,
        date: "21-10-2018"
      },
    ];
    return {products};
  }


  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.sku)) + 1 : 1;
  }
}