import styled from "styled-components";

const BooksCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .bookCard {
        margin-top: 3rem;
        padding: 1rem;

        width: 20rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        border: 1px solid gray;

        p, strong {
            margin: .4rem 0;
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
`;

export {
    BooksCardsContainer
}