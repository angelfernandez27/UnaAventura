import { Component } from "react";

export default class Reminder extends Component{
    render(){
        const{previusSelect}=this.props;
        
        return(
            <div className="recordatorio">
                <h3>previous selection: {previusSelect} </h3>
                <h4>Historic:</h4>
                <ul>{this.props.historic.map((e,i)=>{return(<li key={i.toString()}>{e}</li>)})}</ul>
            </div>
        )
    }
}
