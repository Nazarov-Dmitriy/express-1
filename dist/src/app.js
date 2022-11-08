"use strict";
class Book {
    constructor(title = "", description = "", authors = "", favorite = "", fileCover = "", fileName = "", id = Math.random().toString(36).substring(2)) {
        this.id = id,
            this.title = title,
            this.description = description,
            this.authors = authors,
            this.favorite = favorite,
            this.fileCover = fileCover,
            this.fileName = fileName;
    }
}
class BooksRepository {
    static createBook(title, description, authors, favorite, fileCover, fileName) {
        const book = new Book(title, description, authors, favorite, fileCover, fileName);
        stor.books.push(book);
    }
    static getBook(id) {
        const idx = stor.books.findIndex(el => el.id === id);
        return stor.books[idx];
    }
    static getBooks() {
        return stor.books;
    }
    static updateBook(id, title, description, authors, favorite, fileCover, fileName) {
        const idx = stor.books.findIndex(el => el.id === id);
        if (idx !== -1) {
            stor.books[idx] = Object.assign(Object.assign({}, stor.books[idx]), { title,
                description,
                authors,
                favorite,
                fileCover,
                fileName });
        }
    }
    static deleteBook(id) {
        const idx = stor.books.findIndex(el => el.id === id);
        if (idx !== -1) {
            stor.books.splice(idx, 1);
        }
    }
}
const stor = { books: [] };
