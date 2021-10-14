import React from "react";
import image from './cat_logo.png';

const Error = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Oops! Error 404: Page not Found!</h1>
          <img src={image} alt="cat"/>
        </div>
      </div>
    </div>
  );
};

export default Error;
