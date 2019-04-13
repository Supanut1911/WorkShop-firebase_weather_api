import React , {Component} from 'react'

class Weather extends Component{
    render(){
        return (
            <div>
                <hr/>
                {this.props.city && this.props.country &&     <p>Location : {this.props.city} , {this.props.country} </p>}
                {this.props.temperature &&          <p>temperature : {this.props.temperature} </p>}
                {this.props.humidity &&     <p>humidity : {this.props.humidity} </p>}
                {this.props.description &&          <p>description : {this.props.description} </p>}
                {this.props.error && <p>error : {this.props.error}</p>}

            </div>
        )
    }
}

export default Weather