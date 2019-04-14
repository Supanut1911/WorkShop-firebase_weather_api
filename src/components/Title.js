import React , {Component} from 'react'

class Title extends Component{
    render(){
        return (
            <div >
                <h1 className="title-container__title">Current Weather</h1>
                <h3 className="title-container__subtitle">How is the weather today?</h3>
            </div>
        )
    }
}

export default Title