import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [state, setState] = useState({animationClass: 'test'})

  const changeState = () => {
    if(state.animationClass === 'test'){
      setState({
        animationClass: 'test clicked'
      });
    }else{
      setState({
        animationClass: 'test'
      });
    }
  }


  return (
    <div className={state.animationClass}>
      <button onClick={changeState}>Stop / Start</button>
    </div>
  );
}

export default App;
