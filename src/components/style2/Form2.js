import React  from 'react'

const Form2 = props => {
    return (
        <div>
            <form onSubmit={props.getWeather}>
                <input type="text" name="city" placeholder="city..."></input>
                <input type="text" name="country" placeholder="country..."></input>
                <button>Get Weather</button>

            </form>

        </div>
    )
}

export default Form2