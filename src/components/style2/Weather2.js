import React  from 'react'

const Weather2 = props => {
    return (
        <div>
            <hr/>
            {props.city && props.country &&     <p>Location : {props.city} , {props.country} </p>}
            {props.temperature &&          <p>temperature : {props.temperature} </p>}
            {props.humidity &&     <p>humidity : {props.humidity} </p>}
            {props.description &&          <p>description : {props.description} </p>}
            {props.error && <p>error : {props.error}</p>}

        </div>
    )
}
export default Weather2