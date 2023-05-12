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
    ::-webkit-scrollbar {
        background: #8EFF7B;
        width: 0px;
      }
      ::-webkit-scrollbar-track {
        background: rgb(255, 255, 255, 0);
      }
      ::-webkit-scrollbar-thumb {
        background: yellow;
        border-radius: 10px;
      }
    `

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle