import styled from "styled-components"

export const Container = styled.div`
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

        border: none;
        text-align: center;

        appearance: textfield;
        -moz-appearance: textfield;
        
        background: ${props => props.theme["BACKGROUND_BASE_INPUT"]};
    }

    svg{
        color: ${props => props.theme["PURPLE"]};
        cursor: pointer;
    }

    svg:hover{
        color: ${props => props.theme["PURPLE_DARK"]};
    }
`