import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Artwork from './pages/artwork'

function App() {
  const [style, setStyle] = useState({animationClass: 'test'})
  const [state, setState] = useState("home")

  // Handle fields change
  const handleChange = (e) => {
    setState(e.target.value);
  }

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


  const renderPage = () => {
    console.log("state: " + state)
    switch(state){
      
      case "home":
        return (
          <Home
            handleChange={handleChange}
          />
        )
      case "about":
        return (
          <About
            handleChange={handleChange}
          />
        )
      case "projects":
        return (
          <Projects
            handleChange={handleChange}
          />
        )
      case "artwork":
        return (
          <Artwork
            handleChange={handleChange}
          />
        )
    }
  }

  return (
    <>
      <div className={style.animationClass}>
      {/* <button 
        value={"about"}  
          onClick={e => handleChange(e) } >About</button> */}
        {renderPage()}
        
      </div>
    </>
  );
}

export default App;
