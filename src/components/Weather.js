import React , {Component} from 'react'

class Weather extends Component{
    render(){
        return (
            <div className="weather__info">
                {this.props.city && this.props.country &&     <p className="weather__key"> Location : <span className="weather__value">{this.props.city} , {this.props.country} </span></p>}
                {this.props.temperature &&          <p className="weather__key">temperature : <span className="weather__value">{this.props.temperature}</span> </p>}
                {this.props.humidity &&     <p className="weather__key">humidity : <span className="weather__value">{this.props.humidity}</span> </p>}
                {this.props.description &&          <p className="weather__key">description : <span className="weather__value">{this.props.description}</span> </p>}
                {this.props.error && <p className="weather__error">ERROR: <span className="weather__value">{this.props.error}</span></p>}
                <button onClick={this.props.addTodatabase}> add to database </button>
            </div>
        )
    }
}

export default Weather