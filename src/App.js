import { Component } from "react";
import Options from "./components/Options";
import Datas from './components/db/data.json'
import Reminder from "./components/Reminder";

const Data=Datas;
class App extends Component{
  state={
    data:[],
    count:0,
    historic:[],
    previusSelect:""
  }
  componentDidMount(){
    this.setState({
      data:Data[this.state.count]
    })
  }
  componentDidUpdate(){
    console.log("Component updated");
  }
  
  handleClick=(e)=>{
    const a=document.getElementById("A")
    const b=document.getElementById("B")
    
    if(e.target.value===a.id&&this.state.historic.length===0){
      this.setState({count:this.state.count+1,historic:[...this.state.historic,"A"],previusSelect:"A"})
    }if(e.target.value===b.id&&this.state.historic.length===0){
      this.setState({count:this.state.count+2,historic:[...this.state.historic,"B"],previusSelect:"B"})
    }
    if(e.target.value===a.id&&this.state.historic.length>0){
      if(this.state.previusSelect===a.id){
        this.setState({count:this.state.count+2,historic:[...this.state.historic,"A"],previusSelect:e.target.value})
      }
    }
    if(e.target.value===b.id&&this.state.historic.length>0){
      if(this.state.previusSelect===b.id){
        this.setState({count:this.state.count+2,historic:[...this.state.historic,"B"],previusSelect:e.target.value})
      }
    }
    if(e.target.value===a.id&&this.state.historic.length>0){
      if(this.state.previusSelect===b.id){
        this.setState({count:this.state.count+1,historic:[...this.state.historic,"A"],previusSelect:e.target.value})
      }
    }
    if(e.target.value===b.id&&this.state.historic.length>0){
      if(this.state.previusSelect===a.id){
        this.setState({count:this.state.count+3,historic:[...this.state.historic,"B"],previusSelect:e.target.value})
      }
    }
    if(this.state.historic.length===4){
      a.disabled=true;
      b.disabled=true;
      alert("Fin")
      this.setState(
        {
          
          count:this.state.count,
          historic:this.state.historic,
          previusSelect:this.state.previusSelect
        }
      )   
    }
  }
  
  render(){
    
    return(
      <div className="layout">
        <h1 className="historia">{Data[this.state.count].historia}</h1>
        <Options opcionA={Data[this.state.count].opciones.a} opcionB={Data[this.state.count].opciones.b} handleClick={this.handleClick}/>
        <Reminder historic={this.state.historic} previusSelect={this.state.previusSelect}/>
      </div>
      
    )
  }
}


export default App;
