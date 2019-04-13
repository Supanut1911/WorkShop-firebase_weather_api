import React , {Component} from 'react'

class From extends Component{
    render(){
        return (
            <div>
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