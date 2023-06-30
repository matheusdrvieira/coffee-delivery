import styled from "styled-components"

const ICON_BACKGROUND_COLOR = {
    YELLOW: "YELLOW",
    YELLOW_DARK: "YELLOW_DARK",
    PURPLE: "PURPLE",
    BROWN: "BACKGROUND_BASE_TEXT"
} as const

interface IconProps {
    backgroundColor: keyof typeof ICON_BACKGROUND_COLOR
}

export const Container = styled.span<IconProps>`
    width: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    border-radius: 50%;

    background: ${props => props.theme[ICON_BACKGROUND_COLOR[props.backgroundColor]]};
`