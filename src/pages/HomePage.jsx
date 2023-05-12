import styled from "styled-components"

import Header from "../components/Header"
import Body from "../components/Body"
import Phone from "../components/Phone"

const CardHome = styled.article`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;    
`


const CardLeftHome = styled.section`
    width: 50%;
    height: 100%;
    background-color: white;
`

const CardRightHome = styled.section`
    width: 50%;
    height: 100%;
    background-color: #8EFF7B;
`

function HomePage() {
    return (
        <CardHome>
            <CardLeftHome>
                <Header width="50%"/>
                <Body/>
            </CardLeftHome>
            <CardRightHome>
                <Phone/>
            </CardRightHome>
        </CardHome>
    )
}

export default HomePage