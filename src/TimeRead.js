

import React from 'react';


import {BiTime} from "react-icons/bi"

class TimeRead extends React.Component{

    


  render(){
      
      return (
        
         <div style = {{textAlign:'left',width:"120px",height:"20px"}}>
             
             <BiTime style = {{width:"15px",height:"15px",paddingLeft:"5px"}}></BiTime> <i style={{fontSize:"12px",fontFamily:'Times New Roman, serif'}}>15-minute read</i>
         </div>
        
      );
  }

}

export default TimeRead;
