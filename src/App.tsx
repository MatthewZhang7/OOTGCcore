import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import CreateEventPageName from "./pages/CreateEventNamePage";
import HomePage from "./pages/HomePage";



function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/createEvent/name" element={<CreateEventPageName/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
