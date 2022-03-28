import './style.css'
import Author from './models/author.model';
import Gender from './enums/gender.model';
import Book from './models/book.model';
import Library from './models/library.model';

// Authors
const authorStephen = new Author("Stephen King", "sking@gmail.com", Gender.male);
const authorEsteban = new Author("Esteban", "egutierrez@gmail.com", Gender.male);
const authorShonda = new Author("Shonda", "shonda@gmail.com", Gender.female);

// Books
const bookIt = new Book("It", 20, 2, [authorStephen, authorEsteban]);
const bookGreysAnatomy = new Book("Greys Anatomy", 24, 10, [authorShonda, authorEsteban]);

// Biblioteca
const lasVegasLibrary = new Library("Las Vegas Library");

lasVegasLibrary.addBook(bookIt);
lasVegasLibrary.addBook(bookGreysAnatomy);
//lasVegasLibrary.removeBookById(bookGreysAnatomy.id);

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Autores</h1>
  ${[authorStephen, authorEsteban, authorShonda].map(author => {
  return `<pre>${JSON.stringify(author, undefined, 2)}</pre>`
}).join("")}

<h1>Libros</h1>
${[bookIt, bookGreysAnatomy].map(book => {
  return `<pre>${JSON.stringify(book, undefined, 2)}</pre>`
}).join("")}

<h1>Bibliotecas</h1>
${[lasVegasLibrary].map(library => {
  return `<pre>${JSON.stringify(library, undefined, 2)}</pre>`
}).join("")}

<h1>Stock Biblioteca</h1>
${lasVegasLibrary.getStock()}

<h1>Valor total de todos los libros</h1>
$ ${lasVegasLibrary.getPriceTotal()}

<h1>Buscar por nombre libro q = Ana</h1>
${lasVegasLibrary.findBooksByName("Ana").map(book => {
  return `<pre>${JSON.stringify(book, undefined, 2)}</pre>`
}).join("")}

<h1>Buscar por nombre autor q = Esteban</h1>
${lasVegasLibrary.findBooksByAuthor("Esteban").map(book => {
  return `<pre>${JSON.stringify(book, undefined, 2)}</pre>`
}).join("")}
`
