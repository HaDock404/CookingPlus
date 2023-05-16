import styled from 'styled-components'
import { Link } from 'react-router-dom'

import data from '../datas/data.json'

const Cardrecipe = styled.section`
    background-color: white;
    margin: 20px;
    margin-top: 25px;
    border-radius: 16px;
    padding-top: 0px;
    height: 65%;
    overflow-y: scroll;
    overflow-x: hidden;
    white-space: normal;
    padding-bottom: 75px;
`

const CardTitleRecipe = styled.h2`
    font-size: 20px;
    margin: 15px;
    color: #565656;
`

const CardIngredients = styled.div`
    font-size: 16px;
    margin: 15px;
    color: #565656;
    witdh: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const CardBoxIngredients = styled.div`

`

const BoxImg = styled.div`
    width: 100%;
    height: 300px;
`

const CardImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 300px;
    border-radius: 16px 16px 0 0;
`

const CardButton = styled(Link)`
    width: 200px;
    height: 50px;
    margin-top: 30px;
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
    text-align: center;
    cursor: pointer;
    position: fixed;
    top: 615px;
    right: 150px;
`

function Recipe(props) {

    function InsertIngredients() {

        return (
            data[props.test].ingredients.map((e, i=0) => (
                <CardIngredients key={e.ingredient+i++}><CardBoxIngredients>{e.ingredient}</CardBoxIngredients><CardBoxIngredients>{e.quantity}{e.unitMeasure}</CardBoxIngredients></CardIngredients>))
        )
    }

    function InsterInstruction() {
        return (
            data[props.test].instructions.map((e, i=0) => (
                <CardIngredients key={e+i++}>{e}</CardIngredients>))
        )
    }

    return (
        <Cardrecipe>
            <BoxImg>
                <CardImg src={`./assets/${data[props.test].picture}`}/>
            </BoxImg>
            <CardTitleRecipe>{data[props.test].name}</CardTitleRecipe>
            <InsertIngredients/>
            <InsterInstruction/>
            <CardButton to="">Agrandir</CardButton>
        </Cardrecipe>
        
    )
}

export default Recipe