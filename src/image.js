import  { ReactComponent } from './logo.svg';

import React from 'react';

import PIC from './image1.jpeg';

class Image extends React.Component{


  render(){
      var path = "pic2.jpeg";
      var s= {
          screenLeft : 50,
          screenTop :100
      }
      return (
        
         <div >
             <img src = {PIC} style = {{ height : "300px", width :"250px"}}></img>
         </div>
        
      );
  }

}

export default Image;
