import React from 'react';
import "../styles/Hero.css";

function Hero() {
  let span = {
    fontSize: 16,
    fontWeight: 550
  }

  const logos = [
    { src: "/hero/Abiap.svg", alt: "Abiap logo" },
    { src: "/hero/crystal-land-log.jpg", alt: "Crystal Land logo" },
    { src: "/hero/cwf.jpg", alt: "CWF logo" },
    { src: "/hero/pes.png", alt: "PES logo" }
  ];

  return (
    <div className="heroBlock" style={{ position: "relative" }}>
      <div className='Hero'>
        <center><p className='subHead'>More than a solution</p></center>
        <center><p className="heading">Your Partner in Tech Solutions, Development, and Training</p></center>
        <center>
          <p className="desc">Whether you need a custom website, a mobile app, tech consulting, or digital skills training, BeksTech help businesses, schools, and individuals achieve their technology goals.</p>
        </center>
        <div className="links">
          <a href="#join" className="wait">Contact us</a>
        </div>

        <center>
          <div className="heroImg">
            <img src="/hero/hero.avif" alt="image" />
          </div>
        </center>

        <div className="logos" style={{ zIndex: 1, position: "relative" }}>
          <center><span style={span}>Trusted by Organisations</span></center>
          <div className="logosWrapper">
            {logos.map((logo, index) => (
              <div className="logoBox" key={index}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
