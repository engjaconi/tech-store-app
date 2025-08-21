import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss'
})
export class BookList {
  @Input() books: any = [];
  @Output() add = new EventEmitter<string>();
}
