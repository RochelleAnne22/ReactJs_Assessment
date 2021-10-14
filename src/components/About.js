import React from "react";
import image from './cat2_logo.png';

function About () {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <p className="lead">
          ReactJs Assessment by Rochelle Anne Arceño
        </p>
        <img src={image} alt="cat2"/>
      </div>
    </div>
  );
};

export default About;
