import styled from "styled-components";

export const Container = styled.div`
    main{
        padding: 5rem 10rem;

        h2{
            font-size: 2rem;
            font-family: Baloo 2;
            font-weight: 800;
            line-height: 130%;
        }

        section{
            display: flex;
            flex-wrap: wrap;

            gap: 2rem;
            margin-top: 3.30rem; 
        }
    }
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 3.5rem;
    padding: 5.80rem 10rem 5rem;

    .title{
        display: flex;
        flex-direction: column;
        max-width: 36.75rem;

        h1{
            color:${props => props.theme["BACKGROUND_BASE_TITLE"]};
            font-size: 3rem;
            font-weight: 800;
            line-height: 130%;

            margin-bottom: 1rem;
        }

        p{
            color:${props => props.theme["BACKGROUND_BASE_SUBTITLE"]};
            font-size: 1.25rem;
            font-family: Roboto;
            line-height: 130%;
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