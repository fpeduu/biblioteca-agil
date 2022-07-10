import styled from "styled-components";

const ReturnCardsContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, auto-fill);
    grid-row-gap: 2rem;
    grid-column-gap: 1.5rem;

    .returnCard {
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
    }

    h3 { 
        margin-top: 3rem;
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

        .spanDiv {
            display: none;
        }
        
        .returnCard {
            width: 80vw;
            margin-top: 1.2rem;
        }
    }
`;

export { ReturnCardsContainer };