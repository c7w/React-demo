
import './App.css';
import Nav from "./Nav";
import Footer from "./Footer";

import { InputNumber } from 'antd';

function onChange(value : number) {
  console.log('changed', value);
}


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-background">
        <div className="App-main">
          <h1> 及 格 人 数 统 计 </h1>
          <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
