import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Artwork from './pages/artwork'
import ArrowPad from './components/arrowPad'

function App() {
  const [style, setStyle] = useState({animationClass: 'test'})
  const [state, setState] = useState("home")

  // Handle fields change
  const handleChange = (e) => {
    setState(e.target.value);
  }

  const renderPage = () => {
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
      <div className="bg-[#efa141] h-[40rem] my-2 mx-2 pt-2 rounded-3xl shadow-2xl">
        <div className="bg-black h-1/2 mx-5 mt-5 py-5 rounded-xl">
          <div className="bg-white h-full mx-5 py-5">
            {renderPage()}
          </div>
        </div>
        <div className="grid grid-cols-8 gap-2 mx-5 mt-16 ml-12">
          <div className="col-span-4">
            <ArrowPad />
          </div>
          <div className="col-span-4">test2</div>
        </div>
      </div>
    </>
  );
}

export default App;
