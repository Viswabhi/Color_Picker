import React, { useState, useEffect } from 'react';
import '../App.css';

const generateRandomColor = () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const generateRandomColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const color = {
      name: `Color ${i + 1}`,
      code: generateRandomColor()
    };
    colors.push(color);
  }
  return colors;
};

const ColorCard = ({ color }) => {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(color.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="color-card" style={{ backgroundColor: color.code }}>
      <div className="color-info">
        <h3>{color.name}</h3>
        <p>{color.code}</p>
      </div>
      <button onClick={handleClick}>{copied ? 'Copied!' : 'Copy'}</button>
    </div>
  );
};

const App = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const randomColors = generateRandomColors(50); // Generate 50 random colors
    setColors(randomColors);
  }, []);

  return (
    <div className="app">
      {colors.map((color, index) => (
        <ColorCard key={index} color={color} />
      ))}
    </div>
  );
};

export default App;
