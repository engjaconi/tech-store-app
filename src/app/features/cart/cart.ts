import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';

import { BooksActions } from '../../shared/book-list/state/books.actions';
import { selectBookCollection } from '../../shared/book-list/state/books.selector';
import { BookCollection } from '../../shared/book-collection/book-collection';

@Component({
  selector: 'app-cart',
  imports: [ BookCollection, AsyncPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {

  bookCollection$: ReturnType<Store['select']>;

  constructor(private store: Store) {
    this.bookCollection$ = this.store.select(selectBookCollection);
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
}
