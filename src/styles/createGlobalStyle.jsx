import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html {
        max-width: 100%;
        overflow-x: hidden;
    }
    body {
        display: flex;
        flex-direction column;
        width: 100%;
        min-height: 100vh;
        background-color: white;
        max-width: 100%;
        overflow-x: hidden;
        font-family: 'Roboto', sans-serif;
    }
    `

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle