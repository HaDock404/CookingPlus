import styled from "styled-components"
import { Link } from "react-router-dom"

const CardButton = styled(Link)`
    width: 350px;
    height: 50px;
    margin-top: 30px;
    border-radius: 50px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #8EFF7B;
    font-weight: 1000;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
`

function Print() {
    return (
        <CardButton to="">
            Imprimer la liste de course
        </CardButton>
    )
}

export default Print