const express = require('express')
const {
    v4: uuid
} = require('uuid')

class Book {
    constructor(title = "", description = "", authors = "", favorite = "", fileCover = "", fileName = "", id = uuid()) {
        this.id = id,
            this.title = title,
            this.description = description,
            this.authors = authors,
            this.favorite = favorite,
            this.fileCover = fileCover,
            this.fileName = fileName
    }
}

const stor = {
    books: [
        new Book('книга1', 'описание книги 1', "Автор", "---", "неизвестно", "книга1"),
        new Book('книга2', 'описание книги 2', "Автор", "---", "неизвестно", "книга2"),
    ],
};

const app = express()
app.use(express.json())

app.get('/api/books', (req, res) => {
    const {
        books
    } = stor
    res.json(books)
})

app.get('/api/books/:id', (req, res) => {
    const {
        books
    } = stor
    const {
        id
    } = req.params
    const idx = books.findIndex(el => el.id === id)

    if (idx !== -1) {
        res.json(books[idx])
    } else {
        res.status(404)
        res.json('404 | страница не найдена')
    }

})

app.post('/api/books', (req, res) => {
    const {
        books
    } = stor
    const {
        title,
        description,
        authors,
        favorite,
        tfileCover,
        fileName
    } = req.body

    const newBook = new Book(title, description, authors, favorite, tfileCover, fileName)
    books.push(newBook)

    res.status(201)
    res.json(newBook)
})

app.post('/api/user/login', (req, res) => {
    const {
        id,
        mail
    } = req.body
    res.status(201)

    res.json('{ id: 1, mail: "test@mail.ru" }')
})

app.put('/api/books/:id', (req, res) => {
    const {
        books
    } = stor
    const {
        title,
        description,
        authors,
        favorite,
        tfileCover,
        fileName
    } = req.body
    const {
        id
    } = req.params
    const idx = books.findIndex(el => el.id === id)

    if (idx !== -1) {
        books[idx] = {
            ...books[idx],
            title,
            description,
            authors,
            favorite,
            tfileCover,
            fileName
        }

        res.json(books[idx])
    } else {
        res.status(404)
        res.json('404 | страница не найдена')
    }
})

app.delete('/api/books/:id', (req, res) => {
    const {
        books
    } = stor
    const {
        id
    } = req.params
    const idx = books.findIndex(el => el.id === id)

    if (idx !== -1) {
        books.splice(idx, 1)
        res.json(true)
    } else {
        res.status(404)
        res.json('404 | страница не найдена')
    }
})

const PORT = process.env.PORT || 7070
app.listen(PORT)