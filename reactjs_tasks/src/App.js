import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Task1 from "./Components/Task1";
// Import other tasks

function App() {
  return (
    // <div>
    //   <Task1 />
    // </div>
    <Router>
      <Routes>
        <Route path="/task1" element={<Task1 />} />
        {/* Add other Routes */}
      </Routes>
    </Router>
  );
}

export default App;
