import { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css'

import { InputNumber, Button, Progress, Statistic, message } from 'antd';

function App() {
  const [value, setValue] = useState(90);
  const [passed, setPassed] = useState(0);
  const [failed, setFailed] = useState(0);
  
  function valChange(value: number) {
    setValue(value);
  }

  function submit(value: number) {
    if (value < 0) {
      message.info("The value you inputed was too small. (< 0)");
    } else if (value < 60) {
      setFailed(failed + 1);
    } else if (value <= 100) {
      setPassed(passed + 1);
    } else {
      message.info("The value you inputed was too large. (> 100)");
    }
  }



  return (
    <div className="App">
      <h1>Passed Number Counter</h1>
      <div className="App-main">
        <p>Please Input the Score: </p>
        <InputNumber defaultValue={90} onChange={ valChange } /> &nbsp;&nbsp;
        <Button type="primary" onClick={() => { submit(value); }}>Submit</Button>  &nbsp;&nbsp;
        <Button type="primary" onClick={() => { setPassed(0); setFailed(0); }}>Reset</Button>
      </div>
      <div className="App-DataRaw">
        <Statistic title="Passed Number" value={passed} /> <br />
        <Statistic title="Failed Number" value={failed} /><br />
      </div>
      <div className="App-DataRate">
        <p>Passed Percentage:</p>
        <Progress type="circle" className="App-Percentage" percent={passed+failed===0 ? 100 : Math.round(passed/(passed+failed)*100)} />
      </div>
    </div>
  );
}

export default App;
