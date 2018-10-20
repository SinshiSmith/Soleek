import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id:1,
        name: "Apple",
        image: "img",
        categories: ["Fruit"],
        price: 10,
        date: "2018-10-19"
      },
      {
        id: 2,
        name: "Orange",
        image: "img",
        categories: ["Fruit"],
        price: 10,
        date: "2018-10-19"
      },
      {
        id: 3,
        name: "Avocado",
        image: "img",
        categories: ["Fruit"],
        price: 10,
        date: "2018-10-19"
      },
      {
        id: 4,
        name: "Banana",
        image: "img",
        categories: ["Fruit"],
        price: 10,
        date: "2018-10-19"
      },
      {
        id: 5,
        name: "Strawberries",
        image: "img",
        categories: ["Fruit"],
        price: 10,
        date: "2018-10-19"
      },
    ];
    return {products};
  }


  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
  }
}