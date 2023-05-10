import data from '../datas/data.json'

function Recipe(props) {

    return (
        <div>
            <h1>{data[props.test].name}</h1>
        </div>
        
    )
}

export default Recipe