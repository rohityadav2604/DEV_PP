
import React from "react";
// let MyComp = ()=> {
//     return (
//         <div>
//                 <h1>This is my react component</h1>
//                 <p>dufbefbewbeh</p>
//                 <ul>
//                     <li>item 1</li>
//                 </ul>
    
//        </div>

//     );
// }

 class MyComp extends React.Component
 {      state = {somenumber:0 ,};
       
 
        render = ()=>{
            return (
                <div>
                    <button onClick = {()=>{this.setState({somenumber : this.state.somenumber+1})}}>
                        This is increment button
                       
                    </button>
                    <button onClick = {()=>{this.setState({somenumber : this.state.somenumber-1})}} >
                        This is decrement button
                        
                    </button>
                    <h1>{this.state.somenumber}</h1>
                </div>

            );
        }
 }
 

 export default MyComp;