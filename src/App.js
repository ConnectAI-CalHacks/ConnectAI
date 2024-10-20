import "./App.css";

import React from "react";
import NavBar from "./views/navbar/NavBar";
import LandingPage from "./views/landing-page/LandingPage";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;
