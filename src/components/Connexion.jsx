import styled from "styled-components"
import { Link } from "react-router-dom"

const CardButton = styled(Link)`
    width: 250px;
    height: 50px;
    margin-top: 30px;
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    border: 4px solid white;
    font-weight: 1000;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
`

function Connexion() {
    return (
        <CardButton>
            Se connecter
        </CardButton>
    )
}

export default Connexion