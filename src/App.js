import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import TyreDealersInIndia from "./components/Pages/tyreDealersInIndia";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<TyreDealersInIndia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
