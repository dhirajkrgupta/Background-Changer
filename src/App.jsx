import { useEffect, useState } from "react";

function App() {
  
  
  let colors = ['blue', 'white', 'black', 'red', 'green', 'pink'];
  const [backgroundColor, setbackgroundColor] = useState(loadStateFromLocalStorage||'white');

  function storeSateToLocalStorage(state) {
    localStorage.setItem('appState',JSON.stringify(state));
  }
  function loadStateFromLocalStorage() {
    const state = localStorage.getItem('appState');
    return state ? JSON.parse(state) : undefined;
  }
  useEffect(() => {
    storeSateToLocalStorage(backgroundColor);
  },[backgroundColor])
  return <>
    <div id="myCanvas" style={{backgroundColor:backgroundColor}}>
    </div>
    <div id="colorpicker">
      {colors.map((color) => {
        return (
          <button className="colorBtn" style={{backgroundColor:color}} onClick={()=>setbackgroundColor(color)}></button>
        )
      })}
    </div>
  </>;
}

export default App;
