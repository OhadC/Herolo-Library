import { Component, Input, OnInit } from '@angular/core';

import { BooksService } from '../../books.service';
import { Book } from '../../shared/book.type';

@Component({
  selector: '[app-book-item]',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Input() index: number;

  constructor(private booksService: BooksService) { }

  ngOnInit() {}

  onEdit(){
    this.booksService.editBook.next(this.index);
  }

  onDelete(){
    if (confirm("Are you sure you want to delete?"))
      this.booksService.deleteBook(this.index);
  }

}
