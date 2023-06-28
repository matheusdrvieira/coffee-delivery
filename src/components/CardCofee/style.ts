import styled from "styled-components";

export const Container = styled.div`
    width: 16rem;
    height: 20rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 1.25rem;

    border-radius: 6px 36px;
    background: ${props => props.theme["BACKGROUND_BASE_CARD"]};

    img{
        width: 7.5rem;
        height: 7.5rem;
        border-radius: 50%;

        margin-top: -2rem ;
        margin-bottom: 1rem;
    }

    h1{
        font-size: 1.25rem;
        font-family: Baloo 2;
        font-weight: 700;
        line-height: 130%;

        margin-top: 1.25rem;
        margin-bottom: 0.5rem;
    }

    p{
        font-size: 0.875rem;
        font-family: Roboto;
        line-height: 130%;

        margin-bottom: 2.06rem;
    }

    span{
        font-size: 1rem;
        font-family: Roboto;
        line-height: 130%;
        font-weight: bold;
        white-space: nowrap;

        color: ${props => props.theme["BACKGROUND_BASE_TEXT"]};

        strong{
            font-size: 1.2rem;
        }
    }

    .tags{
        display: flex;
        align-items: center;
        gap: 0.5rem;

        font-size: 0.625rem;
        font-family: Roboto;
        font-weight: 700;
        line-height: 130%;
        text-transform: uppercase;

        color: ${props => props.theme["YELLOW_DARK"]};
    }

    .sectionBottonCard{
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 0.20rem;
    }
`

export const InputNumber = styled.div`
    display: flex;
    align-items: center;

    gap: 0.10rem;
    padding: 0.5rem;
    border-radius: 0.35rem;

    background: ${props => props.theme["BACKGROUND_BASE_INPUT"]};

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

    input[type=number] { 
        width: 1.35rem;
        -moz-appearance: textfield;
        appearance: textfield;
        border: none;

        background: ${props => props.theme["BACKGROUND_BASE_INPUT"]};
    }
`