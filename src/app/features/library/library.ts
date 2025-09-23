import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Book } from '../../core/model/books.model';
import { BooksService } from '../../core/service/books.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-library',
  imports: [MatCardModule, MatButtonModule, MatGridListModule, MatProgressBarModule],
  templateUrl: './library.html',
  styleUrl: './library.scss'
})
export class Library implements OnInit {
  booksService = inject(BooksService);
  cdr = inject(ChangeDetectorRef);
  books: Array<Book> = [];
  isLoading = false;

  ngOnInit(): void {
    this.findAllBooks();
  }

  deleteBook(id: string) {
    this.booksService.deleteBookFromCollection(id).subscribe(() => {
      this.findAllBooks();
    });
  }

  findAllBooks() {
    this.isLoading = true;
    this.booksService.getBooks().subscribe({
      next: books => {
        this.books = books;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
