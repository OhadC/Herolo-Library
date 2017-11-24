import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OnlyEnglishPipe } from './shared/only-english.pipe';
import { SmartCapitalizePipe } from './shared/smart-capitalize.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BooksComponent,
    BookEditComponent,
    BookListComponent,
    BookItemComponent,
    OnlyEnglishPipe,
    SmartCapitalizePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    BooksComponent
  ]
})
export class BooksModule {}
