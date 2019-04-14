import React , {Component} from 'react'

class From extends Component{
    render(){
        return (
            <div>
                <h4 className="title-container__subtitle">Where are you ?</h4>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="city..."></input>
                    <input type="text" name="country" placeholder="country..."></input>
                    <button>Get Weather</button>

                </form>

            </div>
        )
    }
}

export default From