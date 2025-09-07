import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-book-collection',
  imports: [MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './book-collection.html',
  styleUrl: './book-collection.scss'
})
export class BookCollection {
  @Input() books: any = [];
  @Output() remove = new EventEmitter<string>();

  adicionarLivrosBiblioteca() {
    alert('Livros adicionados à sua biblioteca!');
  }
}
