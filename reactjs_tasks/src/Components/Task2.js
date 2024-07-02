import React, { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(display).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setDisplay("");
      setResult("");
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "C",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "*",
    "0",
    ".",
    "+",
    "-",
  ];

  return (
    <div style={styles.container}>
      <div style={styles.calculator}>
        <div style={styles.display}>
          <div style={styles.result}>{result}</div>
          <div style={styles.input}>{display}</div>
        </div>
        <div style={styles.buttonGrid}>
          {buttons.map((btn, index) => (
            <button
              key={index}
              style={styles.button}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
          <button
            style={{ ...styles.button, gridColumn: "span 4" }}
            onClick={() => handleClick("=")}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  calculator: {
    width: 250,
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    padding: 30,
    color: "white",
  },
  display: {
    backgroundColor: "#2D2D2D",
    padding: "30px 30px",
    marginBottom: 10,
    borderRadius: 10,
    textAlign: "right",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  result: {
    fontSize: 24,
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
  },
  buttonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 10,
  },
  button: {
    backgroundColor: "#3D3D3D",
    border: "none",
    color: "white",
    fontSize: 18,
    padding: 15,
    borderRadius: 10,
    cursor: "pointer",
  },
};

export default App;
