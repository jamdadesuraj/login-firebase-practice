import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signout from "./components/Signout";
import Signup from "./components/Signup";
import ResetPass from "./components/ResetPass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-out" element={<Signout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-pass" element={<ResetPass />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
