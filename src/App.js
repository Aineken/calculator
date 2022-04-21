import { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState("")
  const [answer,setAnswer] = useState(0)

  const display=(e)=>{

    setExpression((prev)=>prev+e);
  }

  const result =()=>{
    setAnswer(eval(expression));
  }

  const allClear=()=>{
    setExpression("")
    setAnswer(0)
  };
  const clear=()=>{
    setExpression(prev=>{
      prev.slip("").slice(0, prev.length-1).join("")
    });

    setAnswer(0)
  };


  return (
   <>

     <div className="container">

       <div className="grid">
         <div className="dis">
           <input type="text" value={expression} disabled placeholder='0'   />
           <div className="result">{answer}</div>
         </div>

         <div onClick={allClear} className="padButton AC tomato">AC</div>
         <div onClick={clear} className="padButton C tomato">C</div>
         <div onClick={()=>display("/")} className="padButton div">/</div>
         <div onClick={()=>display("*")} className="padButton multi">X</div>

         <div  onClick={()=>display("7")}className="padButton seven dark-grey">7</div>
         <div  onClick={()=>display("8")}className="padButton eight dark-grey">8</div>
         <div  onClick={()=>display("9")}className="padButton nine dark-grey">9</div>
         <div  onClick={()=>display("-")}className="padButton minus">-</div>

         <div  onClick={()=>display("4")}className="padButton four dark-grey">4</div>
         <div  onClick={()=>display("5")}className="padButton five dark-grey">5</div>
         <div  onClick={()=>display("6")}className="padButton six dark-grey">6</div>
         <div  onClick={()=>display("+")}className="padButton plus">+</div>

         <div  onClick={()=>display("1")}className="padButton one dark-grey">1</div>
         <div onClick={()=>display("2")} className="padButton two dark-grey">2</div>
         <div onClick={()=>display("3")} className="padButton three dark-grey">3</div>
         <div onClick={result} className="padButton equal blue">=</div>

         <div  onClick={()=>display("0")}className="padButton zero dark-grey">0</div>
         <div  onClick={()=>display(".")}className="padButton dot dark-grey">.</div>
       </div>
     </div>
   </>
  );
}

export default App;
