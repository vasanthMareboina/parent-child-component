import './App.css';
import Image from './image.js'
import TimeRead from './TimeRead';
import Title from './title.js'
import Views from './views';

function App() {

  
  return (
    <div className="App">
      <div style={{ backgroundColor: "#f2f2f2", width: "250px", minHeight: "475px", margin: "10% 10%"}}>
      <Image/>
      <Title/>
      <div className='rowC'>
        <div style={{float:'left'}}>
        <TimeRead/>
        </div>
        <div style={{float:'right',paddingRight:"10px"}}>
        <Views/>
        </div>
        <h2 style={{float:'right',paddingRight:"10px"}}>...</h2>
      </div>
      </div>
      
    </div>
  ); 
}

export default App;
