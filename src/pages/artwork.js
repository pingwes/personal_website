import React from "react";
  
const Artwork = (props) => {

  return (
    <div className="px-4 pt-4 mb-2 h-64 overflow-y-auto"
      ref={props.childRef}>
      
      <div className=" text-2xl ">
      Artwork
      </div>
      <div className="mb-2">
        <img src="https://wes-personal-website.s3.amazonaws.com/F5E5E168-4FB9-4D5F-93EA-3E5AD058A259.JPG"></img>
      </div>
      <div className="mb-2">
        <img src="https://wes-personal-website.s3.amazonaws.com/FF9926C6-2DEC-4685-A7B1-D96E6957DD29.JPG"></img>
      </div>
      <div className="mb-2">
        <img src="https://wes-personal-website.s3.amazonaws.com/796D13B2-D7AB-4B6F-B963-6C6E0B3F8001.JPG"></img>
      </div>
      <div className="mb-2">
        <img src="https://wes-personal-website.s3.amazonaws.com/63976B00-AB2B-449F-AE9F-28ED573AA330.JPG"></img>
      </div>
      <div className="mb-2">
        <img src="https://wes-personal-website.s3.amazonaws.com/2FD16605-B204-4B3A-A8EB-B0076954D2FF.JPG"></img>
      </div>
      <div className="mb-2">
        <img src="https://wes-personal-website.s3.amazonaws.com/10D38F2B-DE2E-49B3-B508-D70906848E63.jpg"></img>
      </div>
    </div>
  );
};
  
export default Artwork;