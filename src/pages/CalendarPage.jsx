import { useState } from "react"
import styled from "styled-components"

import Header from "../components/Header"
import Calendar from "../components/Calendar"
import Recipe from "../components/Recipe"

import data from '../datas/data.json'

const CardCalendar = styled.article`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;    
`


const CardLeftCalendar = styled.section`
    width: 80%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardRightCalendar = styled.section`
    width: 20%;
    height: 100%;
    background-color: #8EFF7B;
`

function CalendarPage() {

    const [number1, setNumber1] = useState(Math.floor(Math.random() * data.length))
    const [number2, setNumber2] = useState(Math.floor(Math.random() * data.length))
    const [number3, setNumber3] = useState(Math.floor(Math.random() * data.length))
    const [number4, setNumber4] = useState(Math.floor(Math.random() * data.length))
    const [number5, setNumber5] = useState(Math.floor(Math.random() * data.length))
    const [number6, setNumber6] = useState(Math.floor(Math.random() * data.length))
    const [number7, setNumber7] = useState(Math.floor(Math.random() * data.length))
    const [number8, setNumber8] = useState(Math.floor(Math.random() * data.length))
    const [number9, setNumber9] = useState(Math.floor(Math.random() * data.length))
    const [number10, setNumber10] = useState(Math.floor(Math.random() * data.length))
    const [number11, setNumber11] = useState(Math.floor(Math.random() * data.length))
    const [number12, setNumber12] = useState(Math.floor(Math.random() * data.length))
    const [number13, setNumber13] = useState(Math.floor(Math.random() * data.length))
    const [number14, setNumber14] = useState(Math.floor(Math.random() * data.length))

    const [text, setText] = useState(number1)

    function refreshPage() {
        setNumber1(Math.floor(Math.random() * data.length))
        setNumber2(Math.floor(Math.random() * data.length))
        setNumber3(Math.floor(Math.random() * data.length))
        setNumber4(Math.floor(Math.random() * data.length))
        setNumber5(Math.floor(Math.random() * data.length))
        setNumber6(Math.floor(Math.random() * data.length))
        setNumber7(Math.floor(Math.random() * data.length))
        setNumber8(Math.floor(Math.random() * data.length))
        setNumber9(Math.floor(Math.random() * data.length))
        setNumber10(Math.floor(Math.random() * data.length))
        setNumber11(Math.floor(Math.random() * data.length))
        setNumber12(Math.floor(Math.random() * data.length))
        setNumber13(Math.floor(Math.random() * data.length))
        setNumber14(Math.floor(Math.random() * data.length))
        return 
    }

    function test(e) {
        setText(e.currentTarget.getAttribute('data'))
    }

    return (
        <CardCalendar>
            <CardLeftCalendar>
                <Header/>
                <Calendar 
                    name1={data[number1].name}
                    name2={data[number2].name}
                    name3={data[number3].name}
                    name4={data[number4].name}
                    name5={data[number5].name}
                    name6={data[number6].name}
                    name7={data[number7].name}
                    name8={data[number8].name}
                    name9={data[number9].name}
                    name10={data[number10].name}
                    name11={data[number11].name}
                    name12={data[number12].name}
                    name13={data[number13].name}
                    name14={data[number14].name}

                    number1={number1}
                    number2={number2}
                    number3={number3}
                    number4={number4}
                    number5={number5}
                    number6={number6}
                    number7={number7}
                    number8={number8}
                    number9={number9}
                    number10={number10}
                    number11={number11}
                    number12={number12}
                    number13={number13}
                    number14={number14}

                    fonction={test}
                />
                <button onClick={refreshPage}>Click me</button>
            </CardLeftCalendar>

            <CardRightCalendar>
                <Recipe test={text}/>
            </CardRightCalendar>
        </CardCalendar>
    )
}

export default CalendarPage