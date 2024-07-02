import React, { useState } from "react";

const ColorPicker = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColors, setShowColors] = useState(false);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div style={styles.container}>
      <h2>Color Picker</h2>
      <div style={{ ...styles.colorDisplay, backgroundColor: selectedColor }}>
        {showColors && (
          <div style={styles.colorList}>
            {colors.map((color, index) => (
              <div
                key={index}
                style={{ ...styles.colorSquare, backgroundColor: color }}
                onClick={() => handleColorClick(color)}
              />
            ))}
          </div>
        )}
      </div>
      <button
        style={{
          ...styles.button,
          backgroundColor: selectedColor || "#4CAF50",
        }}
        onClick={() => setShowColors(!showColors)}
      >
        {selectedColor ? `Selected Color: ${selectedColor}` : "Pick a color"}
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  colorDisplay: {
    width: "300px",
    height: "150px",
    borderRadius: "10px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  colorList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
    padding: "10px",
  },
  colorSquare: {
    width: "30px",
    height: "30px",
    cursor: "pointer",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ColorPicker;
