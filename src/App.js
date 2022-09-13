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
  const pages = ["home", "about", "blog", "projects", "artwork", "onlyfans"]
  const [style, setStyle] = useState({animationClass: 'test'})
  const [state, setState] = useState(0)
  const [selector, setSelector] = useState(1)

  // Handle fields change
  const handleChange = (e) => {
    setState(e.target.value);
  }

  const incrementSelector = (e) => {
    if (selector < 6) setSelector(selector + 1);
  }
  
  const decrementSelector = () => {
    if (selector > 1) setSelector(selector - 1);
  }

  const selectState = () => {
    setState(selector)
  }

  const openInNewTab = (url) => {
    window.open(url);
  };

  const renderPage = () => {
    switch(pages[state]){
      case "home":
        return (
          <Home
            handleChange={handleChange}
            current={selector}
          />
        )
      case "about":
        return (
          <About
            handleChange={handleChange}
          />
        )
      case "blog":
        openInNewTab('http://www.compunomicz.blogspot.com')
        return (
          <Home
            handleChange={handleChange}
            current={selector}
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
      case "onlyfans":
        openInNewTab('https://www.wikihow.com/Find-God')
        return (
          <Home
            handleChange={handleChange}
            current={selector}
          />
        )
    }
  }

  return (
    <>
      <div className="bg-[#efa141] h-[40rem] my-2 mx-auto pt-2 rounded-3xl shadow-2xl max-w-md">
        <div className="bg-black h-1/2 mx-5 mt-5 py-5 rounded-xl">
          <div className="bg-white h-full mx-5 py-5">
            {renderPage()}
          </div>
        </div>
        <div className="grid grid-cols-8 gap-2 mx-5 mt-16 ml-12">
          <div className="col-span-4">
            <ArrowPad 
              down={incrementSelector}
              up={decrementSelector} />
          </div>
          <div className="col-span-4 grid grid-cols-2">
            <button className="rounded-3xl w-12 h-12 bg-red-500 text-red-600 text-3xl ml-5 mt-8 text-center"
              value={0}  
              onClick={e => handleChange(e) } >B</button>
            <button className="rounded-3xl w-12 h-12 bg-green-500 text-green-600 text-3xl ml-5 text-center"
              onClick={selectState}>A</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
