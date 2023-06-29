import styled from "styled-components"

export const Container = styled.input`
    width: 100%;

    display: flex;
    align-items: center;

    gap: 0.25rem;
    padding: 0.75rem;

    border: none;
    border-radius: 0.25rem;

    font-size: 0.875rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;

    background: ${props => props.theme["BACKGROUND_BASE_INPUT"]};

    ::placeholder{
        font-size: 0.875rem;
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: ${props => props.theme["BACKGROUND_BASE_LABEL"]};
    }
`