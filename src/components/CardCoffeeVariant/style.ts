import styled from "styled-components";

export const Container = styled.div`
    width: 23rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding: 0.5rem 0.25rem;

    background: ${props => props.theme["BACKGROUND_BASE_CARD"]};

    img{ 
        width: 4rem;
        height: 4rem;

        border-radius: 50%;
    }

    .info{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h1{
            font-size: 1rem;
            font-family: Roboto;
            font-style: normal;
            font-weight: 600;
            line-height: 130%; 
        }
        
        .addAndRemove{
            display: flex;
            align-items: center;
            justify-content: center;

            gap: 0.50rem;
        }
    }

    span{
        font-size: 1rem;
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
    }
`

export const ButtonRemove = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 0.25rem;
    padding: 0.5rem;

    border: none;
    border-radius: 6px;

    font-size: 0.75rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;

    cursor: pointer;
    background: ${props => props.theme["BACKGROUND_BASE_BUTTON"]};

    :hover{
        background: ${props => props.theme["BACKGROUND_BASE_HOVER"]};
    }
`