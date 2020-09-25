import React from 'react';
import NavBarClass from './Components/NavBarClass'
import NavBarFunc from './Components/NavBarFunc'

function App() {
  return (
    
    <div
    style={{textAlign:'Center'}}
    >

      <NavBarClass />
      THe count using classes
      <NavBarFunc />
      The Functional Count
    </div>
    
  );
}

export default App;
