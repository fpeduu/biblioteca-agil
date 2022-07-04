import React, { useState } from 'react';
import { StyledNavbarMobile } from './styles';
import { motion, AnimatePresence } from 'framer-motion';
import { menuIcon, closeMenuIcon } from '../../assets';

const animateFrom = {opacity: 0, x: 100}
const animateFromContainer = {opacity: 0, x: 500}
const animateTo = {opacity: 1, x: 0}

interface props {
    changePage: Function;
}

function handlePageChange(page: Number, changePage: Function, changeMenu: Function) {
    changePage(page)
    changeMenu(false)
}

const NavbarMobile: React.FC<props> = (props: props) => {
    const [open, setOpen] = useState(false);

    const homeLink =  <motion.a 
                onClick={() => handlePageChange(1, props.changePage, setOpen)} href="#home" className="menu-link" key="link-1"
                initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .3}} exit={animateFrom}>
                Home
            </motion.a>

    const donateLink =  <motion.a 
                onClick={() => handlePageChange(2, props.changePage, setOpen)} href="#donate" className="menu-link" key="link-2"
                initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .3}} exit={animateFrom}>
                Doar livro
            </motion.a>

    const returnLink =  <motion.a 
                onClick={() => handlePageChange(3, props.changePage, setOpen)} href="#return" className="menu-link" key="link-3"
                initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .3}} exit={animateFrom}>
                Devolver livro
            </motion.a>

    const openIcon = <img onClick={() => setOpen(!open)} src={ menuIcon } alt="menu" className='menuIcon'/>;
    const closeIcon = <motion.img initial={animateFrom} animate={animateTo} transition={{delay: .3}} onClick={() => setOpen(!open)} src={ closeMenuIcon } alt="menu" className='menuIcon'/>

    return (
        <StyledNavbarMobile>
            <div className="content">
                <h1>Biblioteca Ágil</h1>

                {open ? closeIcon : openIcon}
            </div>

            <AnimatePresence>
                {open && 
                    <motion.div 
                    initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .25}} exit={animateFromContainer} key='links-container'
                    className="nav-links">
                        <div className="links-container">
                            {homeLink}
                            {donateLink}
                            {returnLink}
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </StyledNavbarMobile>
    );
};

export { NavbarMobile }