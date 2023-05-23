import {useLocation} from 'react-router-dom';
import React, {useRef} from "react";
import {useReactToPrint} from 'react-to-print'

import styled from 'styled-components';

import Header from '../components/Header';
import data from '../datas/data.json'

const CardPrint = styled.article`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;

`

const CardSection = styled.section`
    margin-top: 50px;
    width: 100%;
    min-height: 70vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
    align-items: center;
    overflow-y: scroll;
    overflow-x: hidden;
    white-space: normal;
`

const CardTitle = styled.h2`
    width: 100%;
    font-size: 40px;
    text-align: center;
    color: #8a8888;
`

const CardSectionList = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-row-gap: 50px;
    overflow-y: scroll;
    overflow-x: hidden;
    white-space: normal;
    top: 300px;
`

const CardDayList = styled.div`
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
`

const CardDayRecipe = styled.div`
    display: flex;
    flex-direction: row;
`

const BoxDayRecipeImg = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: grey;

`

const CardDayRecipeImg = styled.img`
    object-fit: cover;
    width: 200px;
    height: 100%;
    width: 100%;
    border-radius: 50%;
`

const CardDayRecipeTitle = styled.h3`
    margin: 0px;
    margin-top: 10px;
    margin-left: 10px;
    color: #5c5c5c;
`

const CardDayListIngredients = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;

`

const LabelIngredient= styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const InputIngredient = styled.input`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border: 2px solid yellow;
`

const CardButton = styled.div`
    width: 350px;
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
    bottom: 50px;
`

function PrintPage() {

    const location = useLocation();
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data'
    })

    function IngredientLoop(props) {
        return (
            data[props.number].ingredients.map((e, i=0) => (
                <LabelIngredient key={e.ingredient+i++}>
                    <InputIngredient type="checkbox" name="radio"/>
                        {e.ingredient}
                </LabelIngredient>))
        
        )
    }

    return (
        <CardPrint>
            <Header/>
            <CardSection ref={componentRef}>
                <CardTitle>Liste de courses de la semaine</CardTitle>
                <CardSectionList>
                    <CardDayList>
                        <CardDayRecipe>
                            <BoxDayRecipeImg>
                                <CardDayRecipeImg src={`./assets/${data[location.state.number1].picture}`}/>
                            </BoxDayRecipeImg>
                            <CardDayRecipeTitle>{data[location.state.number1].name}</CardDayRecipeTitle>
                        </CardDayRecipe>
                        <CardDayListIngredients>
                            <IngredientLoop number={location.state.number1}/>
                        </CardDayListIngredients>
                    </CardDayList>
                    <CardDayList>
                        <CardDayRecipe>
                                <BoxDayRecipeImg>
                                    <CardDayRecipeImg src={`./assets/${data[location.state.number2].picture}`}/>
                                </BoxDayRecipeImg>
                                <CardDayRecipeTitle>{data[location.state.number2].name}</CardDayRecipeTitle>
                            </CardDayRecipe>
                            <CardDayListIngredients>
                                <IngredientLoop number={location.state.number2}/>
                            </CardDayListIngredients>
                    </CardDayList>
                    <CardDayList>
                        <CardDayRecipe>
                                <BoxDayRecipeImg>
                                    <CardDayRecipeImg src={`./assets/${data[location.state.number3].picture}`}/>
                                </BoxDayRecipeImg>
                                <CardDayRecipeTitle>{data[location.state.number3].name}</CardDayRecipeTitle>
                            </CardDayRecipe>
                            <CardDayListIngredients>
                                <IngredientLoop number={location.state.number3}/>
                            </CardDayListIngredients>
                    </CardDayList>
                    <CardDayList>
                        <CardDayRecipe>
                                <BoxDayRecipeImg>
                                    <CardDayRecipeImg src={`./assets/${data[location.state.number4].picture}`}/>
                                </BoxDayRecipeImg>
                                <CardDayRecipeTitle>{data[location.state.number4].name}</CardDayRecipeTitle>
                            </CardDayRecipe>
                            <CardDayListIngredients>
                                <IngredientLoop number={location.state.number4}/>
                            </CardDayListIngredients>
                    </CardDayList>
                    <CardDayList>
                        <CardDayRecipe>
                                <BoxDayRecipeImg>
                                    <CardDayRecipeImg src={`./assets/${data[location.state.number5].picture}`}/>
                                </BoxDayRecipeImg>
                                <CardDayRecipeTitle>{data[location.state.number5].name}</CardDayRecipeTitle>
                            </CardDayRecipe>
                            <CardDayListIngredients>
                                <IngredientLoop number={location.state.number5}/>
                            </CardDayListIngredients>
                    </CardDayList>
                    <CardDayList>
                        <CardDayRecipe>
                                <BoxDayRecipeImg>
                                    <CardDayRecipeImg src={`./assets/${data[location.state.number6].picture}`}/>
                                </BoxDayRecipeImg>
                                <CardDayRecipeTitle>{data[location.state.number6].name}</CardDayRecipeTitle>
                            </CardDayRecipe>
                            <CardDayListIngredients>
                                <IngredientLoop number={location.state.number6}/>
                            </CardDayListIngredients>
                    </CardDayList>
                    <CardDayList>
                        <CardDayRecipe>
                                <BoxDayRecipeImg>
                                    <CardDayRecipeImg src={`./assets/${data[location.state.number7].picture}`}/>
                                </BoxDayRecipeImg>
                                <CardDayRecipeTitle>{data[location.state.number7].name}</CardDayRecipeTitle>
                            </CardDayRecipe>
                            <CardDayListIngredients>
                                <IngredientLoop number={location.state.number7}/>
                            </CardDayListIngredients>
                    </CardDayList>
                    <CardDayList>
                        <CardDayRecipe>
                                <BoxDayRecipeImg>
                                    <CardDayRecipeImg src={`./assets/${data[location.state.number8].picture}`}/>
                                </BoxDayRecipeImg>
                                <CardDayRecipeTitle>{data[location.state.number8].name}</CardDayRecipeTitle>
                            </CardDayRecipe>
                            <CardDayListIngredients>
                                <IngredientLoop number={location.state.number8}/>
                            </CardDayListIngredients>
                    </CardDayList>
                    <CardDayList>
                        <CardDayRecipe>
                                <BoxDayRecipeImg>
                                    <CardDayRecipeImg src={`./assets/${data[location.state.number9].picture}`}/>
                                </BoxDayRecipeImg>
                                <CardDayRecipeTitle>{data[location.state.number9].name}</CardDayRecipeTitle>
                            </CardDayRecipe>
                            <CardDayListIngredients>
                                <IngredientLoop number={location.state.number9}/>
                            </CardDayListIngredients>
                    </CardDayList>
                    <CardDayList>
                        <CardDayRecipe>
                                <BoxDayRecipeImg>
                                    <CardDayRecipeImg src={`./assets/${data[location.state.number10].picture}`}/>
                                </BoxDayRecipeImg>
                                <CardDayRecipeTitle>{data[location.state.number10].name}</CardDayRecipeTitle>
                            </CardDayRecipe>
                            <CardDayListIngredients>
                                <IngredientLoop number={location.state.number10}/>
                            </CardDayListIngredients>
                    </CardDayList>
                    <CardDayList>
                        <CardDayRecipe>
                                <BoxDayRecipeImg>
                                    <CardDayRecipeImg src={`./assets/${data[location.state.number11].picture}`}/>
                                </BoxDayRecipeImg>
                                <CardDayRecipeTitle>{data[location.state.number11].name}</CardDayRecipeTitle>
                            </CardDayRecipe>
                            <CardDayListIngredients>
                                <IngredientLoop number={location.state.number11}/>
                            </CardDayListIngredients>
                    </CardDayList>
                    <CardDayList>
                        <CardDayRecipe>
                                <BoxDayRecipeImg>
                                    <CardDayRecipeImg src={`./assets/${data[location.state.number12].picture}`}/>
                                </BoxDayRecipeImg>
                                <CardDayRecipeTitle>{data[location.state.number12].name}</CardDayRecipeTitle>
                            </CardDayRecipe>
                            <CardDayListIngredients>
                                <IngredientLoop number={location.state.number12}/>
                            </CardDayListIngredients>
                    </CardDayList>
                    <CardDayList>
                        <CardDayRecipe>
                                <BoxDayRecipeImg>
                                    <CardDayRecipeImg src={`./assets/${data[location.state.number13].picture}`}/>
                                </BoxDayRecipeImg>
                                <CardDayRecipeTitle>{data[location.state.number13].name}</CardDayRecipeTitle>
                            </CardDayRecipe>
                            <CardDayListIngredients>
                                <IngredientLoop number={location.state.number13}/>
                            </CardDayListIngredients>
                    </CardDayList>
                    <CardDayList>
                        <CardDayRecipe>
                                <BoxDayRecipeImg>
                                    <CardDayRecipeImg src={`./assets/${data[location.state.number14].picture}`}/>
                                </BoxDayRecipeImg>
                                <CardDayRecipeTitle>{data[location.state.number14].name}</CardDayRecipeTitle>
                            </CardDayRecipe>
                            <CardDayListIngredients>
                                <IngredientLoop number={location.state.number14}/>
                            </CardDayListIngredients>
                    </CardDayList>
                </CardSectionList>
                    <CardButton onClick={handlePrint}>Imprimer ou enregistrer</CardButton>
            </CardSection>
        </CardPrint>
    )
}

export default PrintPage