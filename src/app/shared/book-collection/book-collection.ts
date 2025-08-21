import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-collection',
  imports: [],
  templateUrl: './book-collection.html',
  styleUrl: './book-collection.scss'
})
export class BookCollection {
  @Input() books: any = [];
  @Output() remove = new EventEmitter<string>();
}
