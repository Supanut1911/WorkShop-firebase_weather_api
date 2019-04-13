import React, { Component } from 'react';
import firebase from 'firebase'
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'



//-----style2-------
import Title2 from './components/style2/Title2'
import Weather2 from './components/style2/Weather2'
import Form2 from './components/style2/Form2'

const API_KEY = '2e451c7dfb587f457e4b8d084126ab1c'
// 2e451c7dfb587f457e4b8d084126ab1c
// 1d2822a6e2fc38ebd9bb825f2dda2cca
class App extends Component {

  constructor(props){
    super(props)
    var config = {
      apiKey: "AIzaSyAxtT-Dj0tT1QFSSSl-6mGa33dPLSH1YcM",
      authDomain: "myapp-e1d65.firebaseapp.com",
      databaseURL: "https://myapp-e1d65.firebaseio.com",
      projectId: "myapp-e1d65",
      storageBucket: "myapp-e1d65.appspot.com",
      messagingSenderId: "104667370357"
    };
    firebase.initializeApp(config);

 
  }
  state = {
    temperature : undefined,
    city: undefined,
    country : undefined,
    humidity : undefined ,
    description : undefined ,
    error : undefined
  }

  getWeather = async (e) => {
    

    e.preventDefault()
    //ดึงค่าจากหน้า form เพื่อส่งไปยัง api
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${API_KEY}`)
    const data = await api_call.json()
    console.log(data)
    if( city && country){
      this.setState({
        temperature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error : ""
  
      })
    }
    else {
      this.setState({
        temperature : undefined,
        city : undefined,
        country : undefined,
        humidity: undefined,
        description: undefined,
        error : "pls enter the city and the country"
      })
    }
  }
  
  render() {

    
    return (
      <div >
       <Title />

       <Form getWeather={this.getWeather}/>

       <Weather 
        temperature={this.state.temperature} 
        city={this.state.city}
        country ={this.state.country}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}
        />

      {/* //-----styly2 */}
       {/* <Title2 />
       
       <Form2 getWeather={this.getWeather}/>

        <Weather2
        temperature={this.state.temperature} 
        city={this.state.city}
        country ={this.state.country}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}
        /> */}
      </div>
    );
  }
}

export default App;
