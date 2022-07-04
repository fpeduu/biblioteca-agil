import styled from 'styled-components';

const StyledNavbarDesktop = styled.nav`
    position: fixed;
    
    width: 100%;
    height: 100px;

    background-color: #0D090A;
    color: #ffffff;

    display: flex;
    justify-content: center;

    .content {
        height: 100%;
        width: 80vw;
        max-width: 960px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        .nav-links {
            width: 50%;

            display: flex;
            justify-content: space-around;

            a { 
                text-decoration: none;
                color: #ffffff;

                font-size: 1.1rem;

                transition-duration: .3s;
            }

            a:hover {
                color: #CBA135;
            }
        }
    }

    @media(max-width: 768px) {
        display: none;
    }
`;

const StyledNavbarMobile = styled.nav`
    position: fixed;

    width: 100%;
    height: 100px;

    background-color: #0D090A;
    color: #ffffff;

    display: flex;
    justify-content: center;

    .content {
        width: 80vw;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            font-size: 1.4rem;
        }
    }

    .menuIcon {
        z-index: 3;
        cursor: pointer;
    }

    .nav-links {
        z-index: 2;
        position: absolute;

        width: 100%;
        height: 100vh;

        background-color: #0D090A;

        display: flex;
        align-items: center;
        justify-content: center;

        .links-container {
            height: 30vh;

            display: flex;
            flex-direction: column;
            justify-content: space-around;

            a { 
                text-decoration: none;
                color: #ffffff;

                font-size: 1.2rem;
            }
        }
    }

    @media(min-width: 769px) {
        display: none;
    }
`;

export { StyledNavbarDesktop, StyledNavbarMobile };