import React from 'react';
import { StyledNavbarDesktop } from './styles'

interface props {
    changePage: Function;
}

function handleChangePage(page: Number, changePage: Function) {
    changePage(page)
}

const NavbarDesktop: React.FC<props>= (props: props) => {
    return (
        <StyledNavbarDesktop>
            <div className="content">
                <h1>Biblioteca Ágil</h1>

                <div className="nav-links">
                    <a href="#home" onClick={() => handleChangePage(1, props.changePage)}>Home</a>
                    <a href="#donate" onClick={() => handleChangePage(2, props.changePage)}>Doar livro</a>
                    <a href="#return" onClick={() => handleChangePage(3, props.changePage)}>Devolver livro</a>
                </div>
            </div>         
        </StyledNavbarDesktop>
    );
};

export { NavbarDesktop }