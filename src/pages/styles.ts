import styled from 'styled-components';

const ReturnContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 160px 0 60px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const BooksContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 160px 0 60px;

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
        align-items: center;
        justify-content: space-around;
        
        margin-top: 3rem;

        height: 40%;

        .inputContainer {
            display: flex;
            flex-direction: column;

            input {
                margin-top: .8rem;
            }
        }

        button {
            width: 40%;
            height: 2rem;
        }
    }
`;

export {
    ReturnContainer,
    BooksContainer,
    DonateContainer
}