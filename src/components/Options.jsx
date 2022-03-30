import { Component } from "react";

export default class Option extends Component{

    render(){
        const{opcionA,opcionB,handleClick}=this.props;
        
        return(
            <div className="opciones">
                <div  className="opcion"> 
                    <button id="A" onClick={handleClick} value={"A"} className="botones">A</button>
                    <p className="p">{opcionA}</p>
                </div>

                <div  className="opcion">                
                    <button id="B" onClick={handleClick} value={"B"} className="botones">B</button>
                    <p className="p">{opcionB}</p>
                </div>
            </div>
        )
    }
}