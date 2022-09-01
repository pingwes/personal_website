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
      <div className="mx-5 py-20 text-right text-4xl">
        <div className="my-5">About</div>
        <div className="my-5">Blog</div>
        <div className="my-5">Projects</div>
        <div className="my-5">Artwork</div>
        <div className="my-5">LinkedIn</div>
        </div>
    
      {/* <button onClick={changeState}>Stop / Start</button> */}
    </div>
  );
}

export default App;
