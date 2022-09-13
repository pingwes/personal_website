
import React from "react";
import { useState } from 'react';
import ArrowSelect from '../components/arrowSelect'

const Home = ({handleChange, current}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(true);

  return (
    <>
      <div className="mx-5 text-3xl">
        <p>
          {current == 1 && <ArrowSelect/>}
          <button 
            className="terminal text-3xl"
            value={1}  
            onClick={e => handleChange(e) } >About</button>
          <br/>
          {current == 2 && <ArrowSelect/>}
          <button 
            className="terminal text-3xl"
            value={2}  
            onClick={e => handleChange(e) } >Blog</button>
          <br/>
          {current == 3 && <ArrowSelect/>}
          <button 
            className="terminal text-3xl"
            value={3}  
            onClick={e => handleChange(e) } >Projects</button>
          <br/>
          {current == 4 && <ArrowSelect/>}
          <button 
            className="terminal text-3xl"
            value={4}  
            onClick={e => handleChange(e) } >Artwork</button>
          <br/>
          {current == 5 && <ArrowSelect/>}
          <button 
            className="terminal text-3xl"
            value={5}  
            onClick={e => handleChange(e) } >OnlyFans</button>  
        </p>
      </div>
    </>
    );
};

export default Home
  