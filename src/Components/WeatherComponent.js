import React,{Component} from "react";

class WeatherComponent extends Component{
    render(){
        return(
            <div className="weather__info">
                {
                    this.props.city && this.props.country && 
                    <p className="weather__key">Location: 
                        <span className="weather__value"> {this.props.city}, {this.props.country}</span>
                    </p>
                }
                {
                    this.props.temprature && 
                    <p className="weather__key">Temprature: 
                        <span className="weather__value"> {this.props.temprature}</span>
                    </p>
                }
                {
                    this.props.humidity && 
                    <p className="weather__key">Humidity: 
                        <span className="weather__value"> {this.props.humidity}</span>
                    </p>
                }
                {
                    this.props.pressure && 
                    <p className="weather__key">Pressure: 
                        <span className="weather__value"> {this.props.pressure}</span>    
                    </p>
                }
                {
                    this.props.description&& 
                    <p className="weather__key">Conditions: 
                        <span className="weather__value"> {this.props.description}</span>
                    </p>
                }
                {/* {this.props.sunrise && this.props.sunset && <p>Sunrise and Sunset: {this.props.sunrise}, {this.props.sunset}</p>} */}
                {/* {this.props.temp_min && <p>Minimum Temprature: {this.props.temp_min}</p>} */}
                {
                    this.props.temp_max && 
                    <p className="weather__key">Maximum Temprature: 
                        <span className="weather__value"> {this.props.temp_max}</span>
                    </p>
                }
                {
                    this.props.error && <p className="weather__error"> {this.props.error}</p>
                }
            </div>
        );
    }
};
export default WeatherComponent;
// We can also do it like this because it is a stateless component.

// const WeatherComponent = props => (
//     <div>
//         {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
//         {props.temprature && <p>Temprature: {props.temprature}</p>}
//         {props.humidity && <p>Humidity: {props.humidity}</p>}
//         {props.description&& <p>Conditions: {props.description}</p>}
//         {props.error && <p>{props.error}</p>}
//     </div>
// );

