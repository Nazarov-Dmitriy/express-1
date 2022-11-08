interface BookInterface {
    id: string
    title: string
    description: string
    authors: string
    favorite: string
    fileCover: string
    fileName: string
}

class Book implements BookInterface {
    id: string;
    title: string;
    description: string;
    authors: string;
    favorite: string;
    fileCover: string;
    fileName: string;
    constructor(title: string = "", description: string = "", authors: string = "", favorite: string = "", fileCover: string = "", fileName: string = "",
        id: string = Math.random().toString(36).substring(2)
    ) {
        this.id = id,
            this.title = title,
            this.description = description,
            this.authors = authors,
            this.favorite = favorite,
            this.fileCover = fileCover,
            this.fileName = fileName
    }
}


class BooksRepository {
    book: Book;
    static createBook(title: string, description: string, authors: string, favorite: string, fileCover: string, fileName: string): void {
        const book = new Book(title, description, authors, favorite, fileCover, fileName);
        stor.books.push(book)
    }

    static getBook(id: string): Book {
        const idx = stor.books.findIndex(el => el.id === id)
        return stor.books[idx];
    }

    static getBooks(): Book[] {
        return stor.books;
    }

    static updateBook(id: string, title: string, description: string, authors: string, favorite: string, fileCover: string, fileName: string): void {
        const idx = stor.books.findIndex(el => el.id === id)

        if (idx !== -1) {
            stor.books[idx] = {
                ...stor.books[idx],
                title,
                description,
                authors,
                favorite,
                fileCover,
                fileName
            }
        }
    }
    static deleteBook(id: string): void {
        const idx = stor.books.findIndex(el => el.id === id)
        if (idx !== -1) {
            stor.books.splice(idx, 1)
        }
    }
}

interface Stor {
    books?: BookInterface[],
}
const stor: Stor = { books: [] };