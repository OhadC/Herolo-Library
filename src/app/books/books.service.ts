import { EventEmitter, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { Book } from './shared/book.type';

@Injectable()
export class BooksService{
  private books: Book[] = [];
  booksChanged = new Subject<Book[]>();
  editBook = new EventEmitter<number>();

  constructor(private http: Http) {
    this.fetchBooks();
  }

  getBooks(){
    return this.books.slice();
  }

  getBook(index: number){
    return this.books[index];
  }

  addBook(newBook: Book){
    this.books.push(newBook);
    this.pushBooksChange();
  }

  updateBook(updatedBook: Book, index: number){
    this.books[index] = updatedBook;
    this.pushBooksChange();
  }

  deleteBook(index: number): void{
    this.books.splice(index, 1);
    this.pushBooksChange();
  }

  private fetchBooks(){
    this.http.get('assets/books.json')
      .map(
        (response: Response) => {
          const books: Book[] = response.json();
          /*books.forEach((book: Book) => {
            book.date = new Date(book.date);
          });*/
          return books;
        }
      )
      .subscribe(
        (books: Book[]) => {
          this.books = books;
          this.pushBooksChange();
        }
      );
  }

  private pushBooksChange(){
    this.booksChanged.next(this.getBooks());
  }
}
