import styled from "styled-components";

const BACKGROUND_COLOR = {
    YELLOW: "YELLOW_LIGHT",
    PURPLE: "PURPLE_DARK"
} as const

interface BackgroundProps {
    backgroundColor: keyof typeof BACKGROUND_COLOR
}

export const Container = styled.button<BackgroundProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    border: none;
    padding: 0.5rem;
    border-radius: 6px;

    background: ${props => props.theme[BACKGROUND_COLOR[props.backgroundColor]]};

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

        color: ${props => props.theme.WHITE};
        background: ${props => props.theme["YELLOW_DARK"]};
    }

    :hover{
        background: ${(props) =>
        props.backgroundColor === "PURPLE"
            ? props.theme["PURPLE"]
            : props.theme[BACKGROUND_COLOR[props.backgroundColor]]};
    }
`