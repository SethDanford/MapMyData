import React from 'react';
import './App.css';
import { useState } from 'react';

function App(props) {

  const [flash, setFlash] = useState('button');

  let flashingButton = "Click Me"
  props = "192.168.1.4.61983@anonymous ~ %"
  return (
    <div className="App">
      <header className="App-header">
        <p className="text">
          {props}
          <button className={flash}> {flashingButton}</button>
          { () => setFlash('blank-button') }
        </p>
      </header>
    </div>
  );
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


export default App;
 