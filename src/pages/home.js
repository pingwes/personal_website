
import React from "react";
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

const Home = ({handleChange}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(true);

  return (
    <>
      <div className="mx-5">
        <button 
          value={"about"}  
          onClick={e => handleChange(e) } >About</button>
        
          <div>Blog</div>
          <div>Projects</div>
          <div>Artwork</div>
          <div>LinkedIn</div>
        </div>
    </>
    );
};

export default Home
  