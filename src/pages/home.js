
import React from "react";
  
const Home = ({handleChange}) => {
  return (
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
    );
};

export default Home
  