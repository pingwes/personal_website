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
    if (selector < 5) setSelector(selector + 1);
    else
      setSelector(1)
  }
  
  const decrementSelector = () => {
    if (selector > 1) setSelector(selector - 1);
    else
      setSelector(5)
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
        setState(0)
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
        setState(0)
        return (
          <Home
            handleChange={handleChange}
            current={selector}
          />
        )
    }
  }

  return (
    <div className="bg-neutral-700 h-screen	py-2 px-2">
      <div className="relative bg-orange-400 h-[40rem]  mx-auto pt-2 rounded-3xl shadow-2xl max-w-md">
        <div className="bg-black h-1/2 mx-5 mt-5 py-5 pb-10 rounded-xl">
          <div className="bg-slate-800 text-green-500 h-full mx-5 py-5">
            {renderPage()}
          </div>
          <div className="text-center mt-1">
            <div className="text-blue-400 text-xl inline">無限</div>
            <div className="text-purple-400 text-xl inline">の魂</div>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-2 mx-5 mt-16 ml-12">
          <div className="col-span-4">
            <ArrowPad 
              down={incrementSelector}
              up={decrementSelector} />
          </div>
          <div className="col-span-4 grid grid-cols-2">
            <button className="rounded-3xl w-12 h-12 bg-red-500 text-red-600 text-3xl ml-5 mt-8 text-center border border-grey-500"
              value={0}  
              onClick={e => handleChange(e) } >B</button>
            <button className="rounded-3xl w-12 h-12 bg-green-500 text-green-600 text-3xl ml-5 text-center border border-grey-500"
              onClick={selectState}>A</button>
          </div>
        </div>

        <div className="absolute bottom-4 inset-x-0 text-center text-xl">
          <div className='jost text-sm'>weslouis.eth</div>
          <div className='hallelujah '>Wesley Louis Berry III </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
