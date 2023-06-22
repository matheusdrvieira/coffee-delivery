import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;

    .boxRight{
        display: flex;
        align-items: center;
        gap: 1rem;

        div{
            display: flex;
            align-items: center;
            gap: 0.25rem;

            border-radius: 6px;
            padding: 0.5rem;
            
            color:${props => props.theme["PURPLE_DARK"]};
            background: ${props => props.theme["PURPLE_LIGHT"]};
        }
    }
`