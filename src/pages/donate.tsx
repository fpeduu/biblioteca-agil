import React from 'react';
import { DonateContainer } from './styles'
const fs = require('fs')
const $ = require('jquery');

const handleDonate = () => {   
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