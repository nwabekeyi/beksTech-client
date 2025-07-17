import React, { useState } from "react";
import "../../home/styles/About.css";
import ownerImage from "../assets/images/chidi.jpeg";

const testimonials = [
  {
    name: "Inioluwa Gem",
    feedback:
      "Working with you was a fantastic experience. Your attention to detail really made the project stand out!",
  },
  {
    name: "Abigail Samuel",
    feedback:
      "Very professional and easy to work with. The final result exceeded my expectations!",
  },
  {
    name: "Michael James",
    feedback:
      "Highly recommended! Delivered high-quality work on time and with great communication.",
  },
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStraight, setIsStraight] = useState(false);

  const handleDotClick = (index) => setCurrentIndex(index);
  const handleImageClick = () => setIsStraight(!isStraight);

  return (
    <section id="about" className="AboutSection">
      <div className="aboutIntro">
        <p className="tag">Hi, I'm</p>
        <h1 className="name">Chidiebere Nwabekeyi</h1>
        <p className="title">Full Stack Developer</p>

        <div className="aboutActions">
          <a href="#projects" className="primaryBtn">View Projects</a>
          <a href="#contact" className="secondaryBtn">Contact Me</a>
        </div>
      </div>

      <div className="aboutContent">
        <div
          className="aboutImage"
          style={{ transform: isStraight ? "rotate(0)" : "rotate(6deg)" }}
          onClick={handleImageClick}
        >
          <img src={ownerImage} alt="Owner" />
        </div>

        <div className="aboutText">
          <h2>About Me</h2>
          <p>
            Over the past several years, I’ve developed my expertise as a
            full-stack developer, working remotely to build everything from
            engaging landing pages to robust APIs using technologies like React,
            Express.js, PHP, and Python.
          </p>
          <p>
            I enjoy mentoring beginners and helping them grow in their
            development careers. I stay efficient and productive under pressure,
            managing multiple projects and delivering high-quality solutions.
          </p>
        </div>
      </div>

      <div className="testimonials">
        <h3>Testimonials</h3>
        <div className="testimonialCard">
          <p>"{testimonials[currentIndex].feedback}"</p>
          <h4>- {testimonials[currentIndex].name}</h4>
        </div>
        <div className="dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      </div>

      <div className="skillsSection">
        <h3>Skills</h3>
        <div className="skillsGrid">
          <div className="skillCard">
            <h4>Frontend</h4>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Firebase</li>
              <li>Tailwind CSS</li>
              <li>React Native</li>
              <li>SCSS</li>
              <li>Apache Cordova</li>
            </ul>
          </div>
          <div className="skillCard">
            <h4>Backend</h4>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Docker</li>
              <li>Git/GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
