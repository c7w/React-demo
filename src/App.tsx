import React from 'react';
import './App.css';
import Nav from "./Nav"
import Footer from "./Footer"


let [] = [];

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-background">
        <div className="App-main">
          <h1> 及 格 人 数 统 计 </h1>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
