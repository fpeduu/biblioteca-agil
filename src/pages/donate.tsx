import React, { useState } from 'react';
import { DonateContainer } from './styles'
import api from '../services/api'
const $ = require('jquery');

const handleDonate = async (bookName: String, bookAuthor: String, bookYear: Number) => {   
    const newBook = {
        "name": bookName,
        "author": bookAuthor,
        "year": bookYear,
        "available": true,
        "lendTo": ""
    }

    const response = await api.post('', newBook)

    alert('Livro doado. Obrigado!')

    $('form').submit()
}

const DonatePage: React.FC = () => {
    const [bookName, setBookName] = useState('');    
    const [bookAuthor, setBookAuthor] = useState('');    
    const [bookYear, setBookYear] = useState('');    

    return (
        <DonateContainer>
            <h2>Doar livro</h2>

            <form action="/"
                onSubmit={e => {
                    e.preventDefault();
                    handleDonate(bookName, bookAuthor, Number(bookYear))
                }}>
                <div className="inputContainer">
                    <label htmlFor="book-name">Nome do livro:</label>
                    <input onChange={e => {setBookName(e.target.value)}} type="text" id='book-name' required/>
                </div>

                <div className="inputContainer">
                    <label htmlFor="book-author">Autor:</label>
                    <input onChange={e => {setBookAuthor(e.target.value)}} type="text" id='book-author' required/>
                </div>

                <div className="inputContainer">
                    <label htmlFor="book-year">Ano de lançamento:</label>
                    <input onChange={e => {setBookYear(e.target.value)}} type="number" id='book-year' required/>
                </div>                

                <button>Doar</button>
            </form> 
        </DonateContainer>
    );
};

export { DonatePage }