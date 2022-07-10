import React from 'react';
import { ReturnContainer } from './styles';
import { ReturnCards } from '../components'

const ReturnPage: React.FC = (changePage) => {
    return (
        <ReturnContainer>
            <h2>Devolver livro</h2>
            <ReturnCards/>
        </ReturnContainer>
    );
};

export { ReturnPage }