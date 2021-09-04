import { useState } from "react";
import './App.css'

function App() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [id, setId] = useState('');
  
  const handleBtn = ()=>{
    const copyArr = arr.filter((ele)=>{
      return ele !== Number(id)
    })
    
    setArr(copyArr);   
    setId('');
  }
 
  const handleStyle = (ele)=>{
    const styles = {
      height: "50px",
      width: "50px",
      margin: "5px",
      textAlign: 'center',
      fontSize: "40px",
      border: "solid 1px black",
      borderRadius: "50%",
    }
    switch(ele){
      case 1: styles.backgroundColor = 'red';
              break;
      case 2: styles.backgroundColor = 'green';
              break;
      case 3: styles.backgroundColor = 'blue';
              break;
      case 4: styles.backgroundColor = 'purple';
              break;
      case 5: styles.backgroundColor = 'yellow';
              break;
      default:
              break;
    }
    return styles;
  }

  return (
    <div className="App">
      <span>Input value:</span> 
      <input type='number' placeholder="Enter Ball Number" value={id} onChange={(e)=>setId(e.target.value)} style={{width: "150px"}}/> &nbsp;
      <button onClick={handleBtn}>Shoot</button>
      <div id="ball-container">
        {
          arr.map((ele, index)=>{
            return(
              <div key={index} style={handleStyle(ele)} >
                {ele}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;