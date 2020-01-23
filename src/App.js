import React from "react";
import logo from "./logo.svg";
import "./App.css";

// using class instade of function
class App extends React.Component {

  // intiatlizing the state
  state={
    valeur:0,
    classes:"red-background"
    


  }
  // methode changeClassName
  changeClassName(){
    console.log(this.state.classes)
    this.setState({
      classes:"white-background"
    })
  }


  // render() methode
  render() {
    return <div className={this.state.classes}>
      <h1>{this.state.valeur}</h1>
      <div>
      
      <button onClick={()=>{
        //We change state with the methode state
        this.setState({
        valeur: (this.state.valeur>=10)?this.state.valeur+10:this.state.valeur+1
        


      })}}>+</button>
      <button onClick={()=>{
        this.setState({
          valeur:this.state.valeur-1
        })

      }} >-</button>
      </div>

      <button onClick={()=>{this.setState({classes:"white-background"})}}>Change background</button>


    </div>;
  }
}

export default App;
