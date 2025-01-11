// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [isSwitched, setIsSwitched] = useState(false);

  // Function to toggle the container positions
  const switchContainers = () => {
    setIsSwitched(!isSwitched);
  };

  return (
    <div className="app">
      {/* First Row with Switch Button */}
      <div className="row first-row">
        <button className="switch-button" onClick={switchContainers}>
          Switch
        </button>
      </div>

      {/* Second Row with Two Containers */}
      <div className="row second-row">
        {isSwitched ? (
          <>
            <div className="container" style={{ backgroundColor: '#f4a221', flex: 1 }}>
              <h2>Container 3</h2>
              <p>This is the content of Container 3.</p>
            </div>
            <div className="container" style={{ backgroundColor: '#f4a261', flex: 1 }}>
              <h2>Container 2</h2>
              <p>This is the content of Container 2.</p>
            </div>
            <div className="container" style={{ backgroundColor: '#2a9d8f', flex: 1 }}>
              <h2>Container 1</h2>
              <p>This is the content of Container 1.</p>
            </div>
          </>
        ) : (
          <>
            <div className="container" style={{ backgroundColor: '#f4a221', flex: 1 }}>
              <h2>Container 3</h2>
              <p>This is the content of Container 3.</p>
            </div>
            <div className="container" style={{ backgroundColor: '#2a9d8f', flex: 1 }}>
              <h2>Container 1</h2>
              <p>This is the content of Container 1.</p>
            </div>
            <div className="container" style={{ backgroundColor: '#f4a261', flex: 1 }}>
              <h2>Container 2</h2>
              <p>This is the content of Container 2.</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
