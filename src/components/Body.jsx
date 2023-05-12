import styled from "styled-components"
import { Link } from 'react-router-dom'

const CardArticle = styled.article`
    margin-top: 100px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardTitle = styled.h1`
    font-size: 40px;
    color: #8EFF7B;
    font-weight: 1000;
    width: 100%;
    text-align: center;
`

const CardSpeech = styled.h3`
    font-size: 20px;
    color: #535353;
    font-weight: 1000;
    width: 100%;
    text-align: center;
    margin-bottom: 75px;
`

const CardButton = styled(Link)`
    width: 200px;
    height: 50px;
    border-radius: 50px;
    background-color: #8EFF7B;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 1000;
    font-size: 20px;
    text-decoration: none;
`

function Body() {
    return (
        <CardArticle>
            <CardTitle>Besoin d'organiser votre planning Keto ?</CardTitle>
            <CardSpeech>
                Il est difficile de respecter pleinement son régime lorsqu’on ne sait pas comment varier les menus. Avec Keto Plus il suffit d’appuyer, et le menu de votre semaine est généré automatiquement. Un plat adapté à votre alimentation pour chaque repas, ainsi qu’une liste de courses pour les préparer sereinement.
            </CardSpeech>
            <CardButton to="/calendar">Découvrir</CardButton>
        </CardArticle>
    )
}

export default Body