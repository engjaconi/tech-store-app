import { createReducer, on } from "@ngrx/store";
import { Book } from "../model/books.model";
import { BooksApiActions } from "./books.actions";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(BooksApiActions.retrieveBookList, (_state, { books }) => books)
);