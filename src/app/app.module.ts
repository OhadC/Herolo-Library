import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BooksService } from './books/books.service';
import { ModalComponent } from './shared/modal/modal.component';
import { OnlyEnglishPipe } from './books/shared/only-english.pipe';
import { SmartCapitalizePipe } from './books/shared/smart-capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookItemComponent,
    BookEditComponent,
    ModalComponent,
    OnlyEnglishPipe,
    SmartCapitalizePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
