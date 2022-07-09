import styled from 'styled-components';

const Blue = styled.div`
    width: 100%;
    height: 100vh;

    background-color: blue;
`

const BooksContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 160px 0 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const DonateContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        height: 40%;
    }
`;

export {
    Blue,
    BooksContainer,
    DonateContainer
}