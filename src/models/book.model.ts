
import Author from './author.model';
import { v4 as uuidv4 } from 'uuid';


class Book {

  readonly id: string = uuidv4();
  name: string;
  price: number;
  stock: number;
  authors: Author[];

  constructor(name: string, price: number, stock: number, authors: Author[]) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.authors = authors;
  }

  getPriceTotal(): number {
    return this.price * this.stock;
  }

}

export default Book;