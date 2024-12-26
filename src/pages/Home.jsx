import "../App.css";
import React from 'react';
import heroImage from "../images/offer.png";
import project1 from '../images/project_1.png'
import project2 from '../images/project_2.png'
import project3 from '../images/project_3.png'
import Testimonials from '../Components/Testimonials';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import client1 from '../images/Robert.png';

function Home() {
  return (
    <div className="Home">
      <div className="offer">
      <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            Welcome Home <br />
            <span className="highlight">To Luxury</span>
          </h1>
        </div>
      </div>
    </section>
      </div>
      <section className="projects-section">
      {/* Текстовый блок */}
      <div className="projects-header">
      <h2>"The best apartment</h2>
      <h2>in Dubai" we will</h2> 
      <h2>find your dream</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nibh massa, euismod ut libero id, blandit posuere augue. Nulla facilisi.
          Proin eget velit vitae augue malesuada tincidunt. Curabitur vehicula lacus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nibh massa, euismod ut libero id, blandit posuere augue. Nulla facilisi.
          Proin eget velit vitae augue malesuada tincidunt. Curabitur vehicula lacus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nibh massa, euismod ut libero id, blandit posuere augue. Nulla facilisi.
          Proin eget velit vitae augue malesuada tincidunt. Curabitur vehicula lacus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          nibh massa, euismod ut libero id, blandit posuere augue. Nulla facilisi.
          Proin eget velit vitae augue malesuada tincidunt. Curabitur vehicula lacus.
        </p>
      </div>

      <div className="projects-list">
        <div className="project-card">
          <img src={project1} alt="Project 1" />
        </div>
        <div className="project-card highlight-card">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            aliquet massa tellus, malesuada tincidunt nisl.
          </p>
        </div>
        <div className="project-card">
          <img src={project2} alt="Project 2" />
        </div>
        <div className="project-card">
          <img src={project3} alt="Project 3" />
        </div>
      </div>
    </section>
      <div className="Clients">
        <h2>Our Clients About Us</h2>
        <div className="clients-container">
          <Testimonials
            image={client1}
            name={"Paul"}
            role={"Owner in Paul.com"}
            quote={
              "Projects for many large domestic and foreign corporations, enterprises in many fields such as finance, banking, F&B, education, communication."
            }
          />
          <Testimonials
            image={client1}
            name={"Paul"}
            role={"Owner in Paul.com"}
            quote={
              "Projects for many large domestic and foreign corporations, enterprises in many fields such as finance, banking, F&B, education, communication."
            }
          />
          <Testimonials
            image={client1}
            name={"Paul"}
            role={"Owner in Paul.com"}
            quote={
              "Projects for many large domestic and foreign corporations, enterprises in many fields such as finance, banking, F&B, education, communication."
            }
          />
          
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;