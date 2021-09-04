
//import './App.css';

import React from "react";
class App extends React.Component {
     
    state = {
      tasks: ["make coffee" , "make notes"],
      currInput :"abc",
    }
  render = ()=>{
    return (
      <div >
             <input
             type= "text"
             onChange = {
               (e)=>{
                 this.setState({
                      currInput : e.currentTarget.value
                 })
               }
             }

             onKeyDown = {
                (e)=>{
                   if(e.key == "Enter")
                   {
                     this.setState({
                       tasks :[...this.state.tasks , this.state.currInput],
                       currInput:"",

                     });
                   }
                }
             }
             value = {this.state.currInput}
             />
             <ul>
               {
                 this.state.tasks.map(
                   (ele) =>{
                     return <li>{ele}</li>;
                   }
                 )
               }
             </ul>
      </div>
    );
  }
}

export default App;
