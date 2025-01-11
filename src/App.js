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
  const [order, setOrder] = useState(["Container 1", "Container 2", "Container 3","Container 4","Container 5"]);

  // Fisher-Yates Shuffle Function
  const fisherYatesShuffle = (array) => {
    const newArray = [...array]; // Create a copy to avoid mutating the original array
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index between 0 and i
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
  };

  // Function to shuffle the container positions
  const shuffleContainers = () => {
    setOrder(fisherYatesShuffle(order));
  };

  return (
    <div className="app">
      {/* First Row with Shuffle Button */}
      <div className="row first-row">
        <button className="switch-button" onClick={shuffleContainers}>
          Shuffle
        </button>
      </div>

      {/* Second Row with Containers */}
      <div className="row second-row">
        {order.map((container, index) => {
          const backgroundColors = {
            "Container 1": '#2a9d8f',
            "Container 2": '#f4a261',
            "Container 3": '#f4a221',
            "Container 4": '#f1d121',
            "Container 5": '#f2c521',
          };

          return (
            <div
              key={index}
              className="container"
              style={{ backgroundColor: backgroundColors[container], flex: 1 }}
            >
              <h2>{container}</h2>
              <p>This is the content of {container}.</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
