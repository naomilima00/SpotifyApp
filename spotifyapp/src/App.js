import React from "react";
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/NavigationBar/NavigationBar";

const App = () => {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <NavigationBar/>
      <Hero/>
    </div>
  );
}

export default App;
