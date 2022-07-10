import React, { useState, useEffect, FunctionComponent } from 'react';
import api from '../../services/api';
import { ReturnCardsContainer } from './styles'

interface book {
    id: number,
    name: String,
    author: String,
    year: Number,
    available: Boolean,
    lendTo: String
}

const handleReturn = (book: book) => {
    const returnedBook = {
        "name": book.name,
        "author": book.author,
        "year": book.year,
        "available": true,
        "lendTo": ''
    }
    
    api.put(`/${book.id}`, returnedBook)
}

const ReturnCard: React.FC<book> = (book: book) => {
    return (
        <div className='returnCard'>
            <strong>{book.name}</strong>
            <p>{book.author}, {book.year.toString()}</p>
            <p className='red'>Status: <span>Emprestado</span></p>
            <p>Emprestado para: {book.lendTo}</p>
            <button onClick={() => {
                handleReturn(book)
            }} className='returnButton'>Devolver livro</button>
        </div>
    );
}

const ReturnCards: React.FC = () => {
    const [books, setBooks] = useState<Array<any>>([]);

    const getBooks = async () => {
        const response = await api.get("/");
        
        let booksElements: Array<any> = []
        setBooks(booksElements)

        response.data.forEach((bookData: book) => {
            if (!bookData.available) {
                booksElements.push(<ReturnCard
                    id={bookData.id}
                    name={bookData.name}
                    author={bookData.author}
                    year={bookData.year}
                    available={bookData.available}
                    lendTo={bookData.lendTo}
                />)
            }            
        })

        setBooks(booksElements)
    }

    useEffect(() => {
        getBooks();
    })

    let notBorrowed = [<div className='spanDiv'></div>, <h3>Nenhum livro foi emprestado no momento</h3>]
    
    return (
        <ReturnCardsContainer>
           {books.length == 0 ? notBorrowed : books}
        </ReturnCardsContainer>
    );
}

export default ReturnCards;