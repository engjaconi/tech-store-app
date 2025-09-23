import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BooksService } from '../../core/service/books.service';

@Component({
  selector: 'app-book-collection',
  imports: [MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './book-collection.html',
  styleUrl: './book-collection.scss'
})
export class BookCollection {
  @Input() books: any = [];
  @Output() remove = new EventEmitter<string>();

  bookService = inject(BooksService);

  adicionarLivrosBiblioteca() {
    for (let book of this.books) {
      this.bookService.saveBookToCollection(book).subscribe(() => {
        alert(`O livro "${book.volumeInfo.title}" foi adicionado à biblioteca!`);
      });
    }
  }
}
