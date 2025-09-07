import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';

import { GoogleBooksService } from '../../shared/book-list/service/books.service';
import { selectBooks } from '../../shared/book-list/state/books.selector';
import { BooksActions, BooksApiActions } from '../../shared/book-list/state/books.actions';
import { BookList } from '../../shared/book-list/book-list';

@Component({
  selector: 'app-home',
  imports: [BookList, AsyncPipe, MatInputModule, MatIcon, MatFormField, MatButtonModule, MatProgressBarModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  books$: ReturnType<Store['select']>;
  isLoading = false;

  constructor(private booksService: GoogleBooksService, private store: Store) {
    this.books$ = this.store.select(selectBooks);
  }

  ngOnInit() {
    this.findBookByFilter();
  }

  findBookByFilter(filter: string = '') {
    this.isLoading = true;
    this.booksService
      .getBooks(filter)
      .subscribe({
        next: (books) => {
          this.store.dispatch(BooksApiActions.retrieveBookList({ books }));
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        }
      });
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }
}
