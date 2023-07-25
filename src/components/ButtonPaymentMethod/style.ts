import styled from "styled-components";

export const Container = styled.button`
    width: 11rem;

    display: flex;
    align-items: center;

    gap: 0.75rem;
    padding: 1rem;

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

    :active{
        background: ${props => props.theme["PURPLE_LIGHT"]};
    }
`