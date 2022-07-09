import React from 'react';
import { BooksContainer } from './styles';
import { BooksCards, Navbar } from '../components'

const BooksPage: React.FC = () => {
    return (
        <BooksContainer>
            <h2>Livros Disponíveis</h2>
            <BooksCards/>
        </BooksContainer>
    );
};

export { BooksPage }