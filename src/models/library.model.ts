import Book from './book.model';

class Library {
  name: string;
  readonly books: Book[] = []

  constructor(name: string) {
    this.name = name;
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  removeBookById(id: string) {
    const bookPosition = this.books.findIndex((book) => book.id === id);
    if (bookPosition >= 0) {
      this.books.splice(bookPosition, 1);
    }
  }

  findBooksByName(q: string) {
    return this.books.filter(book => book.name.toLocaleLowerCase().includes(q.toLocaleLowerCase()));
  }

  findBooksByAuthor(q: string) {
    return this.books.filter(book => {
      return book.authors.some(author => author.name.toLocaleLowerCase().includes(q.toLocaleLowerCase()));
    })
  }

  getStock(): number {
    let total = 0;
    this.books.forEach(book => total += book.stock);
    return total;
  }

  getPriceTotal(): number {
    let total = 0;
    this.books.forEach(book => total += book.getPriceTotal());
    return total;
  }

}

export default Library;