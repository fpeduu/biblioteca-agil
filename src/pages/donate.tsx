import React from 'react';
import { DonateContainer } from './styles'
import { booksRegister } from '../assets'
const fs = require('fs')
const $ = require('jquery');

const handleDonate = () => {    
    let booksList = [];

    for (let book in booksRegister) {
        booksList.push(booksRegister[book]);
    }

    booksList.push({
        "name": $('#book-name').value,
        "author": $('#book-author').value,
        "year": $('#book-year').value,
        "status": 'Disponível',
        "lendTo": ''
    })

    fs.writeFile('../assets/BooksRegister.json', JSON.stringify(booksList), () => {
    });

    console.log('book donated')
}

const DonatePage: React.FC = () => {
    return (
        <DonateContainer>
            <form action="/">
                <label htmlFor="book-name">Nome do livro:</label>
                <input type="text" id='book-name' required/>

                <label htmlFor="book-author">Autor:</label>
                <input type="text" id='book-author' required/>

                <label htmlFor="book-year">Ano de lançamento:</label>
                <input type="number" id='book-year' required/>

                <button onClick={e => {
                    e.preventDefault();
                    handleDonate();
                    $('form').submit();
                }}>Doar</button>
            </form> 
        </DonateContainer>
    );
};

export { DonatePage }