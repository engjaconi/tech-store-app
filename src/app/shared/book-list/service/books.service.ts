import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { map, Observable } from "rxjs";
import { Book } from "../model/books.model";

@Injectable({
    providedIn: 'root'
})
export class GoogleBooksService {
    constructor(private http: HttpClient) { }

    getBooks(): Observable<Array<Book>> {
        return this.http.get<{ items: Book[] }>('https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=desenvolvimento-de-software')
            .pipe(map(books => books.items || []));
    }
}