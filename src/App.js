import React,{Component} from "react";

import HeaderComponent from './Components/HeaderComponent.js';
import FormComponent from './Components/FormComponent';
import WeatherComponent from './Components/WeatherComponent';

const API_KEY = "a828e7aee2ea09c891d36f1e093686de";

class App extends Component{

  state = {
    temprature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description: undefined,
    error : undefined
  }

  getWeather = async (e) =>{
    e.preventDefault();   
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if(city===true && country===true){
      console.log(data);
      this.setState({
        temprature: data.main.temp,
        city : data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:"" 
      })
    }
    else{
      this.setState({
        temprature: undefined,
        city : undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:"Please enter the values!!!"
    });
  }
}  
  render(){
      return(   
        <div>
          <HeaderComponent />
          <FormComponent getWeather={this.getWeather}/>
          <WeatherComponent 
            temprature = {this.state.temprature}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}
            description = {this.state.description}
            error = {this.state.error}
          />
        </div>
      )
    }    
}
export default App;