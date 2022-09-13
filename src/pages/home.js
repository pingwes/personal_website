
import React from "react";
import { useState } from 'react';
import ArrowSelect from '../components/arrowSelect'

const Home = ({handleChange, current}) => {
  const [showMessage, setShowMessage] = useState(false);
  const [showButton, setShowButton] = useState(true);

  return (
    <>
      <div className="mx-5 w-100 text-2xl">
        <p>
          {current == 1 && <ArrowSelect/>}
          <button 
            className="terminal text-2xl"
            value={1}  
            onClick={e => handleChange(e) } >About me</button>
          <br/>
          {current == 2 && <ArrowSelect/>}
          <button 
            className="terminal text-2xl"
            value={2}  
            onClick={e => handleChange(e) } >Blog</button>
          <br/>
          {current == 3 && <ArrowSelect/>}
          <button 
            className="terminal text-2xl"
            value={3}  
            onClick={e => handleChange(e) } >Projects</button>
          <br/>
          {current == 4 && <ArrowSelect/>}
          <button 
            className="terminal text-2xl"
            value={4}  
            onClick={e => handleChange(e) } >Artwork</button>
          <br/>
          {current == 5 && <ArrowSelect/>}
          <button 
            className="terminal text-2xl"
            value={5}  
            onClick={e => handleChange(e) } >OnlyFans</button>  
        </p>
      </div>
    </>
    );
};

export default Home
  