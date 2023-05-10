import styled from "styled-components"

const CardArticle = styled.article`
    width: 100%;
    height: 70vh;
    background-color: #E8E8E8;
    display: flex;
    flex-direction: row;
    padding-top: 30px;
    padding-bottom: 30px;
    justify-content: space-between;
`

const CardDay = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`

const CardNameDay = styled.h3`
    font-size: 16px;
    font-weight: 1000;
    color: #808080;
    margin: 0px;
`

const BoxBreakfast = styled.div`
    width: 100%;
    background-color: white;
    margin-top: 30px;
    margin-bottom: 10px;
    padding-top: 5px;
`

const BoxLunch = styled.div`
    width: 100%;
    background-color: white;
    margin-bottom: 10px;
    padding-top: 5px;
    cursor: pointer;
`

const BoxSnack = styled.div`
    width: 100%;
    background-color: white;
    margin-bottom: 10px;
    padding-top: 5px;
`

const BoxDinner = styled.div`
    width: 100%;
    background-color: white;
    margin-bottom: 10px;
    padding-top: 5px;
    cursor: pointer;
`

const BoxText = styled.div`
    width: auto;
    height: auto;
    margin: 5px;
    font-weight: 800;
    color: #565656;
`

function Calendar(props) {

    return (
        <CardArticle>
            <CardDay>
                <CardNameDay>
                    Lun
                </CardNameDay>
                <BoxBreakfast 
                    style={{height:"40px"}}
                >
                    <BoxText></BoxText>
                </BoxBreakfast>
                <BoxLunch 
                    onClick={(e)=>{props.fonction(e)}} 
                    style={{height:"200px", backgroundColor:"#FF7171"}}
                    data={props.number1}
                >
                    <BoxText>{props.name1}</BoxText>
                </BoxLunch>
                <BoxSnack  
                    style={{height:"40px"}}
                >
                    <BoxText></BoxText>
                </BoxSnack>
                <BoxDinner
                    onClick={(e)=>{props.fonction(e)}}
                    style={{height:"250px", backgroundColor:"#AF71FF"}}
                    data={props.number2}
                >
                    <BoxText>{props.name2}</BoxText>
                </BoxDinner>
            </CardDay>
            <CardDay>
                <CardNameDay>
                    Mar
                </CardNameDay>
                <BoxBreakfast 
                    style={{height:"80px"}}
                >
                    <BoxText></BoxText>
                </BoxBreakfast>
                <BoxLunch
                    onClick={(e)=>{props.fonction(e)}}
                    style={{height:"200px", backgroundColor:"#71FFB2"}}
                    data={props.number3}
                >
                    <BoxText>{props.name3}</BoxText>
                </BoxLunch>
                <BoxSnack  
                    style={{height:"40px"}}
                >
                    <BoxText></BoxText>
                </BoxSnack>
                <BoxDinner
                    onClick={(e)=>{props.fonction(e)}}
                    style={{height:"250px", backgroundColor:"#DAFF71"}}
                    data={props.number4}
                >
                    <BoxText>{props.name4}</BoxText>
                </BoxDinner>
            </CardDay>
            <CardDay>
                <CardNameDay>
                    Mer
                </CardNameDay>
                <BoxBreakfast 
                    style={{height:"100px"}}
                >
                    <BoxText></BoxText>
                </BoxBreakfast>
                <BoxLunch
                    onClick={(e)=>{props.fonction(e)}}
                    style={{height:"200px", backgroundColor:"#FFFFFF"}}
                    data={props.number5}
                >
                    <BoxText>{props.name5}</BoxText>
                </BoxLunch>
                <BoxSnack  
                    style={{height:"40px"}}
                >
                    <BoxText></BoxText>
                </BoxSnack>
                <BoxDinner
                    onClick={(e)=>{props.fonction(e)}}
                    style={{height:"250px", backgroundColor:"#FF71B5"}}
                    data={props.number6}
                >
                    <BoxText>{props.name6}</BoxText>
                </BoxDinner>
            </CardDay>
            <CardDay>
                <CardNameDay>
                    Jeu
                </CardNameDay>
                <BoxBreakfast 
                    style={{height:"40px"}}
                >
                    <BoxText></BoxText>
                </BoxBreakfast>
                <BoxLunch
                    onClick={(e)=>{props.fonction(e)}}
                    style={{height:"200px", backgroundColor:"#DAFF71"}}
                    data={props.number7}
                >
                    <BoxText>{props.name7}</BoxText>
                </BoxLunch>
                <BoxSnack 
                    style={{height:"40px"}}
                >
                    <BoxText></BoxText>
                </BoxSnack>
                <BoxDinner 
                    onClick={(e)=>{props.fonction(e)}}
                    style={{height:"250px", backgroundColor:"#FFFFFF"}}
                    data={props.number8}
                >
                    <BoxText>{props.name8}</BoxText>
                </BoxDinner>
            </CardDay>
            <CardDay>
                <CardNameDay>
                    Ven
                </CardNameDay>
                <BoxBreakfast 
                    style={{height:"80px"}}
                >
                    <BoxText></BoxText>
                </BoxBreakfast>
                <BoxLunch
                    onClick={(e)=>{props.fonction(e)}}
                    style={{height:"200px", backgroundColor:"#AF71FF"}}
                    data={props.number9}
                >
                    <BoxText>{props.name9}</BoxText>
                </BoxLunch>
                <BoxSnack  
                    style={{height:"40px"}}
                >
                    <BoxText></BoxText>
                </BoxSnack>
                <BoxDinner
                    onClick={(e)=>{props.fonction(e)}}
                    style={{height:"250px", backgroundColor:"#FF7171"}}
                    data={props.number10}
                >
                    <BoxText>{props.name10}</BoxText>
                </BoxDinner>
            </CardDay>
            <CardDay>
                <CardNameDay 
                    style={{color: "#989898"}}
                >
                    Sam
                </CardNameDay>
                <BoxBreakfast 
                    style={{height:"40px"}}
                >
                    <BoxText></BoxText>
                </BoxBreakfast>
                <BoxLunch 
                    onClick={(e)=>{props.fonction(e)}}
                    style={{height:"200px", backgroundColor:"#FFFFFF"}}
                    data={props.number11}
                >
                    <BoxText>{props.name11}</BoxText>
                </BoxLunch>
                <BoxSnack  
                    style={{height:"40px"}}
                >
                    <BoxText></BoxText>
                </BoxSnack>
                <BoxDinner 
                    onClick={(e)=>{props.fonction(e)}}
                    style={{height:"250px", backgroundColor:"#71FFB2"}}
                    data={props.number12}
                >
                    <BoxText>{props.name12}</BoxText>
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
                <BoxBreakfast 
                    style={{height:"100px"}}
                >
                    <BoxText></BoxText>
                </BoxBreakfast>
                <BoxLunch 
                    onClick={(e)=>{props.fonction(e)}}
                    style={{height:"200px", backgroundColor:"#FF71B5"}}
                    data={props.number13}
                >
                    <BoxText>{props.name13}</BoxText>
                </BoxLunch>
                <BoxSnack  
                    style={{height:"40px"}}
                >
                    <BoxText></BoxText>
                </BoxSnack>
                <BoxDinner 
                    onClick={(e)=>{props.fonction(e)}}
                    style={{height:"250px", backgroundColor:"#FFFFFF"}}
                    data={props.number14}
                >
                    <BoxText>{props.name14}</BoxText>
                </BoxDinner>
            </CardDay>
        </CardArticle>
    )
}

export default Calendar