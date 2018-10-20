import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      {
        id:1,
        name: "Apple",
        image: "https://images.unsplash.com/photo-1512578659172-63a4634c05ec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8b54ab3603a1ae291af81311a486244d&auto=format&fit=crop&w=1350&q=80",
        categories: ["Fruit"],
        price: 10,
        date: "2018-10-19"
      },
      {
        id: 2,
        name: "Orange",
        image: "https://images.unsplash.com/photo-1512578000375-660f001ef96d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b2dc6766b432cab064622012b1b13a08&auto=format&fit=crop&w=1350&q=80",
        categories: ["Fruit"],
        price: 10,
        date: "2018-10-19"
      },
      {
        id: 3,
        name: "Avocado",
        image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a88f91a723a209683b18615b9f30e589&auto=format&fit=crop&w=1268&q=80",
        categories: ["Fruit"],
        price: 10,
        date: "2018-10-19"
      },
      {
        id: 4,
        name: "Banana",
        image: "https://images.unsplash.com/photo-1536228891610-d27ef66f7110?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d96577550553d67c983162f7d3aa7b15&auto=format&fit=crop&w=1350&q=80",
        categories: ["Fruit"],
        price: 10,
        date: "2018-10-19"
      },
      {
        id: 5,
        name: "Strawberries",
        image: "https://images.unsplash.com/photo-1525604155062-d5b01d84ad81?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3b5d6a78ca4204519dcf15c11f40d90&auto=format&fit=crop&w=1267&q=80",
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