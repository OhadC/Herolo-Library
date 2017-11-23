import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Book } from '../shared/book.type';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books : Book[] = [];
  private subscription: Subscription;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.books = this.booksService.getBooks();
    this.subscription = this.booksService.booksChanged.subscribe((books: Book[]) => this.books = books);
  }

  onAdd(){
    this.booksService.editBook.next(-1);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
