import { useState } from "react"
import styled from "styled-components"

import data from '../datas/data.json'


const CardArticle = styled.article`
    margin-top: 100px;
    width: 100%;
    min-height: 70vh;
    height: 70vh;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content: space-between;
    overflow-y: scroll;
    overflow-x: hidden;
    white-space: normal;
`

const CardDay = styled.section`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 30px;
    margin-bottom: 30px;
`

const CardNameDay = styled.h3`
    font-size: 25px;
    font-weight: 1000;
    color: #808080;
    margin: 0px;
`

const BoxLunch = styled.div`
    width: 550px;
    height: 150px;
    background-color: white;
    cursor: pointer;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
`

const BoxDinner = styled.div`
    width: 550px;
    height: 150px;
    background-color: white;
    cursor: pointer;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
`

const BoxImg = styled.div`
    width: 200px; 
    height: 100%;
`

const CardImg = styled.img`
    object-fit: cover;
    width: 200px;
    height: 100%;
    border-radius: 16px 0 0 16px;
`

const CardTitleRecipe = styled.div`
    width: auto;
    height: auto;
    margin: 5px;
    font-weight: 900;
    color: #565656;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 20px;
`

const BoxText = styled.div`
    display: flex;
    flex-direction: column;
`

const CardSubtitleRecipe = styled.div`
    font-size: 14px;
    color: #565656;
    margin-left: 10px;
    margin-top: 10px;
`

function Calendar(props) {

    function ScaleState() {
        setScale1("none")
        setScale2("none")
        setScale3("none")
        setScale4("none")
        setScale5("none")
        setScale6("none")
        setScale7("none")
        setScale8("none")
        setScale9("none")
        setScale10("none")
        setScale11("none")
        setScale12("none")
        setScale13("none")
        setScale14("none")
        return
    }
    function ShadowState() {
        setShadow1("none")
        setShadow2("none")
        setShadow3("none")
        setShadow4("none")
        setShadow5("none")
        setShadow6("none")
        setShadow7("none")
        setShadow8("none")
        setShadow9("none")
        setShadow10("none")
        setShadow11("none")
        setShadow12("none")
        setShadow13("none")
        setShadow14("none")
        return
    }

    function InsertSubtitle(props) {
        return (
            data[props.numberIngredient].ingredients.map((e, i=0) => (
                <CardSubtitleRecipe key={i++}>{e.ingredient}</CardSubtitleRecipe>))
        )
    }

    const [scale1, setScale1] = useState("1.05")
    const [scale2, setScale2] = useState("none")
    const [scale3, setScale3] = useState("none")
    const [scale4, setScale4] = useState("none")
    const [scale5, setScale5] = useState("none")
    const [scale6, setScale6] = useState("none")
    const [scale7, setScale7] = useState("none")
    const [scale8, setScale8] = useState("none")
    const [scale9, setScale9] = useState("none")
    const [scale10, setScale10] = useState("none")
    const [scale11, setScale11] = useState("none")
    const [scale12, setScale12] = useState("none")
    const [scale13, setScale13] = useState("none")
    const [scale14, setScale14] = useState("none")

    const [shadow1, setShadow1] = useState("5px 5px 5px 1px #B5B5B5")
    const [shadow2, setShadow2] = useState("none")
    const [shadow3, setShadow3] = useState("none")
    const [shadow4, setShadow4] = useState("none")
    const [shadow5, setShadow5] = useState("none")
    const [shadow6, setShadow6] = useState("none")
    const [shadow7, setShadow7] = useState("none")
    const [shadow8, setShadow8] = useState("none")
    const [shadow9, setShadow9] = useState("none")
    const [shadow10, setShadow10] = useState("none")
    const [shadow11, setShadow11] = useState("none")
    const [shadow12, setShadow12] = useState("none")
    const [shadow13, setShadow13] = useState("none")
    const [shadow14, setShadow14] = useState("none")

    return (
        <CardArticle>
            <CardDay>
                <CardNameDay>
                    Lun
                </CardNameDay>
                <BoxLunch 
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState();setScale1("1.05"); setShadow1("5px 5px 5px 1px #B5B5B5")}} 
                    style={{scale:`${scale1}`, boxShadow: `${shadow1}`}}
                    data={props.number1}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number1].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number1].name}</CardTitleRecipe>
                        <InsertSubtitle numberIngredient={props.number1}/>
                    </BoxText>
                    
                </BoxLunch>
                <BoxDinner
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState(); setScale2("1.05"); setShadow2("5px 5px 5px 1px #B5B5B5")}}
                    style={{scale:`${scale2}`, boxShadow: `${shadow2}`}}
                    data={props.number2}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number2].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number2].name}</CardTitleRecipe>
                    </BoxText>
                    
                </BoxDinner>
            </CardDay>
            <CardDay>
                <CardNameDay>
                    Mar
                </CardNameDay>
                <BoxLunch
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState(); setScale3("1.05"); setShadow3("5px 5px 5px 1px #B5B5B5")}}
                    style={{scale:`${scale3}`, boxShadow: `${shadow3}`}}
                    data={props.number3}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number3].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number3].name}</CardTitleRecipe>
                    </BoxText>
                    
                </BoxLunch>
                <BoxDinner
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState(); setScale4("1.05"); setShadow4("5px 5px 5px 1px #B5B5B5")}}
                    style={{scale:`${scale4}`, boxShadow: `${shadow4}`}}
                    data={props.number4}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number4].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number4].name}</CardTitleRecipe>
                    </BoxText>
                    
                </BoxDinner>
            </CardDay>
            <CardDay>
                <CardNameDay>
                    Mer
                </CardNameDay>
                <BoxLunch
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState(); setScale5("1.05"); setShadow5("5px 5px 5px 1px #B5B5B5")}}
                    style={{scale:`${scale5}`, boxShadow: `${shadow5}`}}
                    data={props.number5}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number5].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number5].name}</CardTitleRecipe>
                    </BoxText>
                    
                </BoxLunch>
                <BoxDinner
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState(); setScale6("1.05"); setShadow6("5px 5px 5px 1px #B5B5B5")}}
                    style={{scale:`${scale6}`, boxShadow: `${shadow6}`}}
                    data={props.number6}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number6].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number6].name}</CardTitleRecipe>
                    </BoxText>
                    
                </BoxDinner>
            </CardDay>
            <CardDay>
                <CardNameDay>
                    Jeu
                </CardNameDay>
                <BoxLunch
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState(); setScale7("1.05"); setShadow7("5px 5px 5px 1px #B5B5B5")}}
                    style={{scale:`${scale7}`, boxShadow: `${shadow7}`}}
                    data={props.number7}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number7].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number7].name}</CardTitleRecipe>
                    </BoxText>
                    
                </BoxLunch>
                <BoxDinner 
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState(); setScale8("1.05"); setShadow8("5px 5px 5px 1px #B5B5B5")}}
                    style={{scale:`${scale8}`, boxShadow: `${shadow8}`}}
                    data={props.number8}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number8].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number8].name}</CardTitleRecipe>
                    </BoxText>
                    
                </BoxDinner>
            </CardDay>
            <CardDay>
                <CardNameDay>
                    Ven
                </CardNameDay>
                <BoxLunch
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState(); setScale9("1.05"); setShadow9("5px 5px 5px 1px #B5B5B5")}}
                    style={{scale:`${scale9}`, boxShadow: `${shadow9}`}}
                    data={props.number9}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number9].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number9].name}</CardTitleRecipe>
                    </BoxText>
                    
                </BoxLunch>
                <BoxDinner
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState(); setScale10("1.05"); setShadow10("5px 5px 5px 1px #B5B5B5")}}
                    style={{scale:`${scale10}`, boxShadow: `${shadow10}`}}
                    data={props.number10}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number10].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number10].name}</CardTitleRecipe>
                    </BoxText>
                    
                </BoxDinner>
            </CardDay>
            <CardDay>
                <CardNameDay 
                    style={{color: "#989898"}}
                >
                    Sam
                </CardNameDay>
                <BoxLunch 
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState(); setScale11("1.05"); setShadow11("5px 5px 5px 1px #B5B5B5")}}
                    style={{scale:`${scale11}`, boxShadow: `${shadow11}`}}
                    data={props.number11}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number11].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number11].name}</CardTitleRecipe>
                    </BoxText>
                    
                </BoxLunch>
                <BoxDinner 
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState(); setScale12("1.05"); setShadow12("5px 5px 5px 1px #B5B5B5")}}
                    style={{scale:`${scale12}`, boxShadow: `${shadow12}`}}
                    data={props.number12}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number12].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number12].name}</CardTitleRecipe>
                    </BoxText>
                    
                </BoxDinner>
            </CardDay>
            <CardDay  
                style={{marginRight: "30px"}}
            >
                <CardNameDay  
                    style={{color: "#989898"}}
                >
                    Dim
                </CardNameDay>
                <BoxLunch 
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState(); setScale13("1.05"); setShadow13("5px 5px 5px 1px #B5B5B5")}}
                    style={{scale:`${scale13}`, boxShadow: `${shadow13}`}}
                    data={props.number13}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number13].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number13].name}</CardTitleRecipe>
                    </BoxText>
                   
                </BoxLunch>
                <BoxDinner 
                    onClick={(e)=>{props.fonction(e); ScaleState(); ShadowState(); setScale14("1.05"); setShadow14("5px 5px 5px 1px #B5B5B5")}}
                    style={{scale:`${scale14}`, boxShadow: `${shadow14}`}}
                    data={props.number14}
                >
                    <BoxImg>
                        <CardImg src={`./assets/${data[props.number14].picture}`}/>
                    </BoxImg>
                    <BoxText>
                        <CardTitleRecipe>{data[props.number14].name}</CardTitleRecipe>
                    </BoxText>
                    
                </BoxDinner>
            </CardDay>
        </CardArticle>
    )
}

export default Calendar