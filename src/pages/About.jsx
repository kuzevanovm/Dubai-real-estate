import React from "react";
import "../App.css";
import img from '../images/appartaments.png'
import Footer from "../Components/Footer";


function About() {
  return (
    <div className="about-page">
      {/* Верхний блок с заголовком */}
     
      <h1>About Us</h1>
      <img className="imgAbout" src={img} alt="Dubai"/>

      
        <div className="intro-content">
          <p>
            Our mission is to transform the way people find and enjoy their dream properties. 
            With a focus on quality, innovation, and exceptional service, we aim to make every 
            real estate journey seamless and enjoyable.Our mission is to transform the way people find and enjoy their dream properties. 
            With a focus on quality, innovation, and exceptional service, we aim to make every 
            real estate journey seamless and enjoyable.Our mission is to transform the way people find and enjoy their dream properties. 
            With a focus on quality, innovation, and exceptional service, we aim to make every 
            real estate journey seamless and enjoyable.Our mission is to transform the way people find and enjoy their dream properties. 
            With a focus on quality, innovation, and exceptional service, we aim to make every 
            real estate journey seamless and enjoyable.
          </p>
          <p>
            Since our inception, we have been dedicated to providing top-notch services that cater 
            to diverse client needs. Whether you're looking for a luxurious apartment in the city 
            or a serene villa by the sea, we have something for everyone.Our mission is to transform the way people find and enjoy their dream properties. 
            With a focus on quality, innovation, and exceptional service, we aim to make every 
            real estate journey seamless and enjoyable.Our mission is to transform the way people find and enjoy their dream properties. 
            With a focus on quality, innovation, and exceptional service, we aim to make every 
            real estate journey seamless and enjoyable.Our mission is to transform the way people find and enjoy their dream properties. 
            With a focus on quality, innovation, and exceptional service, we aim to make every 
            real estate journey seamless and enjoyable.
          </p>
        </div>
        <Footer />
    </div>
    
  );
}

export default About;
