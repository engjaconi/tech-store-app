import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { map, Observable } from "rxjs";
import { Book } from "../../../core/model/books.model";

@Injectable({
    providedIn: 'root'
})
export class GoogleBooksService {
    constructor(private http: HttpClient) { }

    getBooks(filter: string, startIndex: number = 0): Observable<Array<Book>> {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return new Observable<Array<Book>>(subscriber => {
                subscriber.next([]);
                subscriber.complete();
            });
        }
        return this.http.get<{ items: Book[] }>(`https://www.googleapis.com/books/v1/volumes?maxResults=10&startIndex=${startIndex}&orderBy=relevance&q=${filter}`)
            .pipe(map(books => books.items || []));
    }
}