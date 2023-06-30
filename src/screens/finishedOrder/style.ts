import styled from "styled-components";

export const Container = styled.div`
    article{
        margin: 5rem 10rem 2.5rem;

        h1{
            font-size: 2rem;
            font-family: Baloo 2;
            font-style: normal;
            font-weight: 800;
            line-height: 130%;

            color: ${props => props.theme["YELLOW_DARK"]};
        }

        p{
            font-size: 1.25rem;
            font-family: Roboto;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
        }
    }

    main{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        gap: 6.37rem;
        padding: 0 10rem;
    }
`

export const InfoOrder = styled.section`
  
    display: flex;
    flex-direction: column;

    gap: 2rem;
    padding: 2.5rem;

    font-size: 1rem;
    font-family: Roboto;
    font-weight: 400;

    border-radius: 0.375rem 2.25rem;
   

    background: ${props => props.theme["BACKGROUND_BASE"]};

    .boxInfo{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`

export const Borda = styled.div`
    width: 32.875rem;
    position: relative;
    background: linear-gradient(90deg, rgba(219,172,44,1) 0%, rgba(128,71,248,1) 100%);
    padding: 1px;
    border-radius: 0.375rem 2.25rem;
    
`