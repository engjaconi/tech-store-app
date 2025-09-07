import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-book-list',
  imports: [MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss'
})
export class BookList {
  @Input() books: any = [];
  @Input() filter: string = '';
  @Output() add = new EventEmitter<string>();
}
