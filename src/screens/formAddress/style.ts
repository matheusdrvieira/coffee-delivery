import styled from "styled-components";

export const Container = styled.div`
    main{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        gap: 2rem;
        padding: 4.5rem 10rem;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
            
    gap: 1rem;

    h1{
        font-size: 1.125rem;
        font-family: Baloo 2;
        font-style: normal;
        font-weight: 700;
        line-height: 130%;
    }
`

export const BaseSectionOne = styled.section`
    padding: 2.5rem 2.5rem;

    border-radius: 0.375rem;
        
    background: ${props => props.theme["BACKGROUND_BASE_CARD"]};
`

export const SectionTwo = styled(BaseSectionOne)`
    .buttonsPayment{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`
export const SectionThree = styled(BaseSectionOne)`
    border-radius: 0.375rem 2.75rem;

    hr{
        height: 1px;
    
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    
        border: none;
    
        background-color: ${props => props.theme["BACKGROUND_BASE_BUTTON"]};
    }
    
    .infoAmount{
        display: flex;
        align-items: center;
        justify-content: space-between;
    
        margin-bottom: 1rem;
    
        p{
            font-size: 0.875rem;
            font-family: Roboto;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
        }
    
        span{
            font-size: 1rem;
            font-family: Roboto;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
        }
    
        h3{
            font-size: 1.25rem;
            font-family: Roboto;
            font-style: normal;
            font-weight: 700;
            line-height: 130%;
        }
    }    
`
export const Info = styled.div`
    display: flex;
    align-items: baseline;

    gap: 0.25rem;
    margin-bottom: 2rem;

    h1{
        font-size: 1rem;
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; 
    }

    p{
        font-size: 0.875rem;
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    gap: 1rem;
    
    .inputsTop,
    .inputsCenter, 
    .inputsBotton{
        display: flex;
        gap: 0.55rem;
    }

    .inputsTop{
        flex-direction: column;

        input:nth-child(1){
            width: 11rem;
        }
    }

    .inputsCenter{
        input:nth-child(1){
            width: 11rem;
        }
    }

    .inputsBotton{
        input:nth-child(1){
            width: 11rem;
        }

        select{
            width: 3.75rem;

            display: flex;
            align-items: center;
            
            border: none;
            border-radius: 0.25rem;

            font-size: 0.875rem;
            font-family: Roboto;
            font-style: normal;
            font-weight: 400;

            color: ${props => props.theme["BACKGROUND_BASE_LABEL"]};
            background: ${props => props.theme["BACKGROUND_BASE_INPUT"]};
        }
    }
`
export const Input = styled.input`
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

export const Button = styled.button`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 0.375rem;
    
    padding: 0.90rem;

    font-size: 0.875rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
   
    text-transform: uppercase;

    color: ${props => props.theme["WHITE"]};
    background: ${props => props.theme["YELLOW"]};

    :hover{
        background: ${props => props.theme["YELLOW_DARK"]};
    }

    :disabled{
        cursor: not-allowed;
    }
`