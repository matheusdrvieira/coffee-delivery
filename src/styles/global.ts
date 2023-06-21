import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        background: ${props => props.theme["BACKGROUND_BASE"]};
        color:${props => props.theme["BACKGROUND_BASE_TEXT"]};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        outline: none;
    }

    a{
        text-decoration: none;
        color:${props => props.theme["BACKGROUND_BASE_TEXT"]};
    }
`;