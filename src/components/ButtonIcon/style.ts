import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    border: none;
    padding: 0.5rem;
    border-radius: 6px;

    background: ${props => props.theme["YELLOW_LIGHT"]};

    span{
        width: 1.25rem;
        height: 1.25rem;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 10%;
        left: 90%;
        transform: translate(-50%, -50%);
        
        border-radius: 50%;
        
        font-size: 0.75rem;
        font-weight: 700;

        color:  ${props => props.theme.WHITE};
        background: ${props => props.theme["YELLOW_DARK"]};
    }
`