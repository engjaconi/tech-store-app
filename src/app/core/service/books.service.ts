import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { map, Observable } from "rxjs";
import { Book } from "../model/books.model";
import { environment } from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BooksService {
    constructor(private http: HttpClient) { }

    getBooks(): Observable<Array<any>> {
        return this.http.get<Array<any>>(`${environment.apiUrl}/books`).pipe(
            map(dtos => dtos.map(dto => this.BookDtoToBook(dto)))
        );
    }

    saveBookToCollection(book: Book): Observable<Book> {
        return this.http.post<Book>(`${environment.apiUrl}/books`, this.BookToDto(book));
    }

    deleteBookFromCollection(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.apiUrl}/books/${id}`);
    }

    BookDtoToBook(dto: any): Book {
        return {
            id: dto.googleBookId,
            volumeInfo: {
                title: dto.title,
                authors: dto.authors ? dto.authors.split(', ') : [],
                publisher: dto.publisher,
                publishedDate: dto.publishedDate,
                description: dto.description,
                pageCount: dto.pageCount,
                imageLinks: {
                    thumbnail: dto.thumbnail,
                    smallThumbnail: dto.smallThumbnail
                }
            }
        };
    }

    BookToDto(book: Book): any {
        return {
            googleBookId: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors.join(', '),
            publisher: book.volumeInfo.publisher,
            publishedDate: book.volumeInfo.publishedDate,
            description: book.volumeInfo.description,
            pageCount: book.volumeInfo.pageCount,
            thumbnail: book.volumeInfo.imageLinks.thumbnail,
            smallThumbnail: book.volumeInfo.imageLinks.smallThumbnail
        }
    }
}