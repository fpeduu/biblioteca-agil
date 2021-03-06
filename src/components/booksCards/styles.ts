import styled from "styled-components";

const BooksCardsContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, auto-fill);
    grid-row-gap: 2rem;
    grid-column-gap: 1.5rem;

    .bookCard {
        margin-top: 3rem;
        padding: 3rem 2rem;

        width: 27vw;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        border: 1px solid gray;

        p, strong {
            margin: .4rem 0;
        }

        button { 
            margin-top: .5rem;
        }

        .hidden {
            cursor: not-allowed;
        }
    }

    .green span {
        color: green
    }

    .red span {
        color: red
    }

    @media(max-width: 768px) {
        width: 100%;
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .bookCard {
            width: 80vw;
            margin-top: 1.2rem;
        }
    }
`;

export {
    BooksCardsContainer
}