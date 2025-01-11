import React, { useState } from "react";
import "./App.css";

function App() {
  const [order, setOrder] = useState([
    "Container 1",
    "Container 2",
    "Container 3",
    "Container 4",
    "Container 5",
  ]);
  const [formData, setFormData] = useState({ name: "", email: "", rut: "" });

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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
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
            "Container 1": "#2a9d8f",
            "Container 2": "#f4a261",
            "Container 3": "#f4a221",
            "Container 4": "#f1d121",
            "Container 5": "#f2c521",
          };

          return (
            <div
              key={index}
              className="container"
              style={{ backgroundColor: backgroundColors[container] }}
            >
              <h2>{container}</h2>
              <p>This is the content of {container}.</p>
            </div>
          );
        })}
      </div>

      {/* Third Row with Form */}
      <div className="row third-row">
        <form className="user-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email ID:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="rut">RUT:</label>
            <input
              type="text"
              id="rut"
              name="rut"
              value={formData.rut}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
