
import React from 'react';


import {BsPerson} from "react-icons/bs"

class Views extends React.Component{

    


  render(){
      
      return (
        
         <div style = {{textAlign:'right',width:"120px",height:"20px"}}>
             
             <BsPerson style = {{width:"15px",height:"15px"}}></BsPerson> <i style={{fontSize:"12px",fontFamily:'Times New Roman, serif'}}>17.1k reads</i>
         </div>
        
      );
  }

}

export default Views;
