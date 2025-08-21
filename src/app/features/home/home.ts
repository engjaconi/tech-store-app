import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { GoogleBooksService } from '../../shared/book-list/service/books.service';
import { selectBooks } from '../../shared/book-list/state/books.selector';
import { BooksActions, BooksApiActions } from '../../shared/book-list/state/books.actions';
import { BookList } from '../../shared/book-list/book-list';

@Component({
  selector: 'app-home',
  imports: [BookList, AsyncPipe],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  books$: ReturnType<Store['select']>;

  constructor(private booksService: GoogleBooksService, private store: Store) {
    this.books$ = this.store.select(selectBooks);
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) =>
        this.store.dispatch(BooksApiActions.retrieveBookList({ books }))
      );
  }

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }
}
