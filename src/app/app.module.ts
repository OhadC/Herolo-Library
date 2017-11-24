import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BooksModule,
    SharedModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
