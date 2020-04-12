import React, { useDebugValue } from "react";

import HeaderComponent from './Components/HeaderComponent.js';
import FormComponent from './Components/FormComponent';
import WeatherComponent from './Components/WeatherComponent';

const API_KEY = "a828e7aee2ea09c891d36f1e093686de";

class App extends React.Component{

  state = {
    temprature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    pressure : undefined,
    description: undefined,
    // sunrise: undefined,
    // sunset: undefined,
    // temp_min:undefined,
    temp_max:undefined,
    error : undefined
  }

  getWeather = async (e) =>{
    e.preventDefault();   
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    // console.log(data);        
      if(city && country){
        this.setState({
          temprature: data.main.temp,
          city : data.name,
          country:data.sys.country,
          humidity:data.main.humidity,
          pressure:data.main.pressure,
          description:data.weather[0].description,
          // sunrise:data.sys.sunrise,
          // sunset:data.sys.sunset,
          // temp_min:data.main.temp_min,
          temp_max:data.main.temp_max,
          error:"" 
        });
      }
    else{
      this.setState({
        temprature: undefined,
        city : undefined,
        country:undefined,
        humidity:undefined,
        pressure:undefined,
        description:undefined,
        // sunrise: undefined,
        // sunset: undefined,
        // temp_min:undefined,
        temp_max:undefined,
        error:"Please enter the values!!!"
      });
    }
  }  
  render(){
      return(   
        <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                   <HeaderComponent />
                  </div>
                  <div className="col-xs-7 form-container">
                   <FormComponent getWeather={this.getWeather}/>
                   <WeatherComponent 
                    temprature = {this.state.temprature}
                    city = {this.state.city}
                    country = {this.state.country}
                    humidity = {this.state.humidity}
                    pressure = {this.state.pressure}
                    description = {this.state.description}
                    // sunrise = {this.state.sunrise}
                    // sunset = {this.state.sunset}
                    // temp_min = {this.state.temp_min}
                    temp_max = {this.state.temp_max}
                    error = {this.state.error}
                   />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }    
}
export default App;

         
          