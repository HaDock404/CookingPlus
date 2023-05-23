import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const CardButton = styled.div`
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

function Print(props) {

    const navigate = useNavigate()

    function clickMe() {
        navigate('/print', 
            {state: {
                        name : props.name,
                        number1: props.number1,
                        number2: props.number2,
                        number3: props.number3,
                        number4: props.number4,
                        number5: props.number5,
                        number6: props.number6,
                        number7: props.number7,
                        number8: props.number8,
                        number9: props.number9,
                        number10: props.number10,
                        number11: props.number11,
                        number12: props.number12,
                        number13: props.number13,
                        number14: props.number14,
                    }
            })
    }

    return (
        <CardButton onClick={()=>clickMe()}>
            Imprimer la liste de course
        </CardButton>
       
    )
}

export default Print