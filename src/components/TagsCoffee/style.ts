import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;

    border-radius: 100px;
    background: ${props => props.theme["YELLOW_LIGHT"]};;

`