import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Artwork from './pages/artwork'
import ArrowPad from './components/arrowPad'
import ReactGA from 'react-ga';
import OpenNewTabIcon from './components/OpenNewTabIcon';

const TRACKING_ID = "UA-241109753-1"; // OUR_TRACKING_ID


function App() {
  
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID, {
      debug: true,
      titleCase: false,
      gaOptions: {
        userId: 123
      }
    });
  })

  const pages = ["home", "about", "blog", "projects", "artwork", "YouTube", "LinkedIn"]
  const [style, setStyle] = useState({animationClass: 'test'})
  const [state, setState] = useState(0)
  const [selector, setSelector] = useState(1)

  // Handle fields change
  const handleChange = (e) => {
    setState(e.target.value);
  }

  const incrementSelector = (e) => {
    if (selector < 6) setSelector(selector + 1);
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
        ReactGA.event({
          category: 'Navigation',
          action: 'Home'
        });

        return (
          <Home
            handleChange={handleChange}
            current={selector}
          />
        )
      case "about":
        ReactGA.event({
          category: 'Navigation',
          action: 'About'
        });

        return (
          <About
            handleChange={handleChange}
          />
        )
      case "blog": 
        ReactGA.event({
          category: 'Navigation',
          action: 'Blog'
        });
        return (    
          <iframe
            src={"https://www.compunomicz.blogspot.com"}
            frameBorder="0"
            width="300"
            style={{width: '100%', height: '100%' }}
          />      
        )
      case "projects":
        ReactGA.event({
          category: 'Navigation',
          action: 'Projects'
        });

        return (
          <Projects
            handleChange={handleChange}
          />
        )
      case "artwork":
        ReactGA.event({
          category: 'Navigation',
          action: 'Artwork'
        });
        openInNewTab('https://vsco.co/berrywes/gallery')
        setState(0)
        return (
          <Home
            handleChange={handleChange}
            current={selector}
          />
        )
      case "YouTube":
        ReactGA.event({
          category: 'Navigation',
          action: 'YouTube'
        });
        openInNewTab('https://www.youtube.com/watch?v=Tit0cglCkso')
        setState(0)
        return (
          <Home
            handleChange={handleChange}
            current={selector}
          />
        )
      case "LinkedIn":
        ReactGA.event({
          category: 'Navigation',
          action: 'LinkedIn'
        });
        return (
          <>
            
          </>
        )
      // case "onlyfans":
      //   ReactGA.event({
      //     category: 'Navigation',
      //     action: 'OnlyFans'
      //   });

      //   openInNewTab('https://www.wikihow.com/Find-God')
      //   setState(0)
      //   return (
      //     <Home
      //       handleChange={handleChange}
      //       current={selector}
      //     />
      //   )
    }
  }

  return (
    <div className="bg-neutral-700 h-screen flex justify-center items-center px-5 ">
      <div className="relative bg-orange-400 h-[40rem] w-[25rem] mx-auto pt-2 rounded-3xl shadow-2xl ">
        <div className="bg-black h-1/2 mx-5 mt-5 py-5 pb-10 rounded-xl">
          <div className="bg-slate-800 text-white h-full mx-5 py-0">
            {renderPage()}
          </div>
          <div className="text-center mt-1 ">
            <div className="text-blue-400 text-2xl inline">無限</div>
            <div className="text-purple-400 text-2xl inline">の魂 </div>
            <div className='flex justify-end -mt-7 mr-6 '
              onClick={()=>{
                if(selector == 2)
                  openInNewTab('http://www.compunomicz.blogspot.com')
              }}>            
              <OpenNewTabIcon fill={selector == 2 ? "white" : "gray"} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-2 mx-5 mt-16 ml-5">
          <div className="col-span-4 pl-6 ">
            <ArrowPad 
              down={incrementSelector}
              up={decrementSelector}
              left={handleChange}
              right={selectState} />
          </div>
          <div className="col-span-4 grid grid-cols-2 pr-6">
            <button className="rounded-3xl w-12 h-12 bg-red-500 text-red-600 text-3xl ml-4 mt-8 text-center border border-grey-500"
              value={0}  
              onClick={e => handleChange(e) } >B</button>
            <button className="rounded-3xl w-12 h-12 bg-green-500 text-green-600 text-3xl ml-4 text-center border border-grey-500"
              onClick={selectState}>A</button>
          </div>
        </div>

        <div className="absolute bottom-4 inset-x-0 text-center text-xl">
          <div className='jost text-md'>weslouis.eth</div>
          {/* <div className='hallelujah '>Wesley Louis Berry III </div> */}
          
        </div>
        
      </div>
    </div>
  );
}

export default App;
