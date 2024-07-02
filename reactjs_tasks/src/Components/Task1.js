import React, { useState, useEffect } from "react";

function Task1() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Responsive Paragraph Word Counter</h2>
      <textarea
        value={text}
        onChange={handleTextChange}
        style={{
          width: "100%",
          minHeight: "100px",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
        placeholder="Type your text here..."
      />
      <p style={{ marginTop: "10px" }}>Word Count: {wordCount}</p>
    </div>
  );
}

export default Task1;
