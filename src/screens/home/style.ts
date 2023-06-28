import styled from "styled-components";

export const Container = styled.div`
    main{
        padding: 5rem 10rem;

        section{
            display: flex;
            gap: 2rem;
        }
    }

`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 3.5rem;
    padding: 5.80rem 10rem 0;

    .title{
        display: flex;
        flex-direction: column;
        max-width: 36.75rem;

        h1{
            color:${props => props.theme["BACKGROUND_BASE_TITLE"]};
            font-size: 3rem;
            font-weight: 800;
            line-height: 130%;
        }

        p{
            color:${props => props.theme["BACKGROUND_BASE_SUBTITLE"]};
            font-size: 1.25rem;
            font-family: Roboto;
            line-height: 130%;

            margin-top: 1rem;
        }

        .info{
            display: flex;
            gap: 3rem;
            margin-top: 3.60rem;

            .boxInfo{
                display: flex;
                flex-direction: column;
                gap: 1.25rem;
            }

           .boxIconParagraph{
                display: flex;
                align-items: center;
                gap: 1rem;

                p{
                    color:${props => props.theme["BACKGROUND_BASE_TEXT"]};
                    font-size: 1rem;
                    font-family: Roboto;
                    line-height: 130%;
                }              
           }
        }
    }
`

const ICON_BACKGROUND_COLOR = {
    YELLOW: "YELLOW",
    YELLOW_DARK: "YELLOW_DARK",
    PURPLE: "PURPLE",
    BROWN: "BACKGROUND_BASE_TEXT"
} as const

interface IconProps {
    backgroundColor: keyof typeof ICON_BACKGROUND_COLOR
}

export const IconInfo = styled.span<IconProps>`
    width: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    border-radius: 50%;

    background: ${props => props.theme[ICON_BACKGROUND_COLOR[props.backgroundColor]]};
`