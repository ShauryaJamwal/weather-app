import React,{Component} from "react";

class FormComponent extends Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type = "text" name="city" placeholder="Enter city..."/><br />
                <input type = "text" name="country" placeholder="Enter country..."/><br />
                <button> Get Weather </button>
            </form>
        )
    }
} 
export default FormComponent;