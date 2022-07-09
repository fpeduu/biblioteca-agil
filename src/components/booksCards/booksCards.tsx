import React, { useState, useEffect, FunctionComponent } from 'react';
import api from '../../services/api';
import { BooksCardsContainer } from './styles'

interface book {
    id: number,
    name: String,
    author: String,
    year: Number,
    available: Boolean,
    lendTo: String
}

const handleLend = (book: book) => {
    let personName = window.prompt('Digite seu nome: ')

    if (personName != null) {
        const lendBook = {
            "name": book.name,
            "author": book.author,
            "year": book.year,
            "available": false,
            "lendTo": personName
        }
    
        api.put(`/${book.id}`, lendBook)
    } else {
        alert('Nome inválido.')
    }
    
}

const BookCard: React.FC<book> = (book: book) => {
    return (
        <div className='bookCard'>
            <strong>{book.name}</strong>
            <p>{book.author}, {book.year.toString()}</p>
            <p className={book.available ? 'green' : 'red'}>Status: <span>{book.available ? 'Disponível' : 'Emprestado'}</span></p>
            {!book.available && <p>Emprestado para: {book.lendTo}</p>}
            <button onClick={() => handleLend(book)} className={book.available ? 'lendButton' : 'hidden lendButton'} disabled={!book.available}>Pegar livro</button>
        </div>
    );
}

const BooksCards: React.FC = () => {
    const [books, setBooks] = useState();

    const getBooks = async () => {
        const response = await api.get("/");
        
        let booksElements: any = []

        response.data.forEach((bookData: book) => {
            booksElements.push(<BookCard
                id={bookData.id}
                name={bookData.name}
                author={bookData.author}
                year={bookData.year}
                available={bookData.available}
                lendTo={bookData.lendTo}
            />)
        })

        setBooks(booksElements)

    }

    useEffect(() => {
        getBooks();
    })
    
    return (
        <BooksCardsContainer>
           {books}
        </BooksCardsContainer>
    );
}

export default BooksCards;