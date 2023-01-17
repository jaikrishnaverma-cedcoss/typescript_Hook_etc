import React, { useState } from 'react';
import './App.css';
import ParentComponents from './Components/ParentComponents';
import ParentComponents2 from './Components/ParentComponents2';

function App() {
 const [toggle,setToggle]=useState(true)
  return (
    <div className="App">
      <button className='btn' onClick={()=>setToggle(!toggle)}>{(toggle)?'Switch to Task 2':'Switch to Task 1'}</button>
           <header className="App-header">
      {
        (toggle)?<ParentComponents />: <ParentComponents2 />
      }
 
        
      </header>

    </div>
  );
}

export default App;
