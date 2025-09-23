import { createReducer, on } from "@ngrx/store";
import { Book } from "../../../core/model/books.model";
import { BooksApiActions } from "./books.actions";

export var initialState: Array<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(BooksApiActions.retrieveBookList, (_state, { books }) => {
        // Não adicionar livros duplicados
        books.forEach(book => {
            if (!initialState.find(b => b.id === book.id)) {
                initialState = [...initialState, book];
            }
        });
        return initialState;
    })
);