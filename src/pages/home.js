
import React from "react";
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

const Home = ({handleChange}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(true);

  return (
    <>
      <button
          onClick={() => setShowMessage(true)}
          size="lg">
          Show Message
        </button>
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >      
      <div className="mx-5 py-20 text-right text-4xl">
        <button
          className="my-5" 
          value={"about"}  
          onClick={e => handleChange(e) } >About</button>
        
          <div className="my-5">Blog</div>
          <div className="my-5">Projects</div>
          <div className="my-5">Artwork</div>
          <div className="my-5">LinkedIn</div>
        </div>
        
      </CSSTransition>
    </>
    );
};

export default Home
  