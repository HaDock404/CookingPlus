import styled from 'styled-components'

import data from '../datas/data.json'

const Cardrecipe = styled.section`
    background-color: white;
    margin: 10px;
    border-radius: 16px;
    padding-top: 1px;
    height: 50%;
    overflow-y: scroll;
    overflow-x: hidden;
    white-space: normal;
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
            <CardTitleRecipe>{data[props.test].name}</CardTitleRecipe>
            <InsertIngredients/>
            <InsterInstruction/>
        </Cardrecipe>
        
    )
}

export default Recipe