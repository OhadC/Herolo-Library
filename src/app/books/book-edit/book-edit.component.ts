import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Book } from '../shared/book.type';
import { BooksService } from '../books.service';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit, OnDestroy {
  @ViewChild('modal') modal: ModalComponent;
  editMode: boolean;
  book: Book;
  index: number;
  bookForm: FormGroup;
  private subscription: Subscription;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.initForm();

    this.subscription = this.booksService.editBook.subscribe((index: number) => {
      if(index < 0){
        this.editMode = false;
      } else {
        this.editMode = true;
        this.index = index;
        this.book = this.booksService.getBook(index);
      }
      this.setForm();
      this.popModal();
    });
  }

  onSubmit(){
    if (this.editMode) {
      this.booksService.updateBook(this.bookForm.value, this.index);
    } else {
      this.booksService.addBook(this.bookForm.value);
    }
    this.closeModal();
  }

  onCancel(){
    if (this.formHasChanged()) {
      if (confirm("Any changes  won't be saved!"))
        this.closeModal();
    } else {
      this.closeModal();
    }
  }

  private formHasChanged(){
    const formValues = this.bookForm.value;
    let defaultValues = {
      title: null,
      author: null,
      date: null
    };
    if(this.editMode)
      defaultValues = this.book;

    return formValues.title !== defaultValues.title || formValues.author !== defaultValues.author || formValues.date !== defaultValues.date;
  }

  private popModal(){
    this.modal.show();
  }

  private closeModal(){
    this.modal.hide();
  }

  private setForm(){
    if(this.editMode){
      this.bookForm.setValue({
        author: this.book.author,
        date: this.book.date,
        title: this.book.title
      })
    } else {
      this.bookForm.reset();
    }
  }

  private initForm(){
    this.bookForm = new FormGroup({
      author: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.required)
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
