import React,{Component} from "react";

class HeaderComponent extends Component{
    render(){
        return(
            <div>
                <h1 className ="title-container__title">Weather Detector:</h1>
                <h4 className ="title-container__subtitle">Find out temperature conditions and more...</h4>
            </div>
        );
    }
};
export default HeaderComponent;
// Another method to do this
// const HeaderComponent = () => (
//     <div>
//         <h1>Weather Detector</h1>
//         <p>Find out temprature conditions and more</p>
//     </div>
// );


