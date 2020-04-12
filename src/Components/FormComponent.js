import React,{Component} from "react";

class FormComponent extends Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type = "text" name="city" placeholder="City..."/>
                <input type = "text" name="country" placeholder="Country..."/>
                <button> <span className="btn-text">Search</span> </button>
            </form>
        );
    }
};
export default FormComponent;
// As it is a stateless component we can also do it using this method

// const FormComponent = props => (
//     <form onSubmit={props.getWeather}>
//         <input type = "text" name="city" placeholder="Enter city..."/><br />
//         <input type = "text" name="country" placeholder="Enter country..."/><br />
//         <button> Get Weather </button>
//     </form>
// );
