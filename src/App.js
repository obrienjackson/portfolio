import React from 'react';
import './App.css';
import logo from './images/logo.png';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo-container">
          <a href="#" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <img src={logo} alt="Enigma Logo" className="logo-image" />
            <div className="logo-text">Enigma Services</div>
          </a>
        </div>
        <div className="nav-links">
          <a href="#services"><strong>Services</strong></a>
          <a href="#past-works"><strong>Past Works</strong></a>
          <a href="#pricing"><strong>Pricing</strong></a>
          <a href="#contact"><strong>Contact</strong></a>
          <a href="#about"><strong>About Us</strong></a>
        </div>
      </nav>

      <header className="hero">
        <img src={logo} alt="Enigma Services Logo" className="hero-logo" />
        <h1>Enigma Services</h1>
        <p>Team Created Services Made Quickly</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>System Development</h3>
            <p>Multi-layered systems</p>
          </div>
          <div className="service-card">
            <h3>Single Development Services</h3>
            <p>Individual services for your needs</p>
          </div>
          <div className="service-card">
            <h3>Affordable Pricing</h3>
            <p>Pricing that fits your budget</p>
          </div>
        </div>
      </section>

      <section id="past-works" className="past-works">
        <h2>Featured Past Works</h2>
        <div className="works-grid">
          <div className="work-card">
            <div className="work-image">
              <img src={require('./images/nw.png')} alt="Project 1" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
            <h3>Napoleonic Wars</h3>
            <p>Created Animations and Models</p>
          </div>
          <div className="work-card">
            <div className="work-image">
              <img src={require('./images/pw.png')} alt="Punic Wars" />
            </div>
            <h3>Punic Wars</h3>
            <p>Scripting, Animation, Models, UI/UX</p>
          </div>
          <div className="work-card">
            <div className="work-image">
              <img src={require('./images/hcbb.png')} alt="Project 3" />
            </div>
            <h3>HCBB 9v9</h3>
            <p>Building UI/UX, Clothing</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Pricing Plans</h2>
        <p className="pricing-description">These are the <strong>minimum</strong> costs for our services, if you're interested in hiring us then contact us through our Discord and we can sort out a package that's perfect for you and your project!</p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Basic System</h3>
            <p className="price">$200+ / 100,000R$+</p>
            <ul>
              <li>Basic Functionality</li>
              <li>Two Full Revisions</li>
              <li>Within 1 Week Delivery</li>
            </ul>
          </div>
          <div className="pricing-card featured">
            <h3>Standard System</h3>
            <p className="price">$500+ / 250,000R$+</p>
            <ul>
              <li>Complex System</li>
              <li>Three Full Revisions</li>
              <li>Within 2 Weeks Delivery</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Advanced System</h3>
            <p className="price">$800+ / 500,000R$+</p>
            <ul>
              <li>Very Advanced System</li>
              <li>Three Full Revisions</li>
              <li>Within Agreed Timescale</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <div className="discord-container">
          <a href="https://discord.gg/eEZNeyj6UV" target="_blank" rel="noopener noreferrer">
            <img src={require('./images/discordLogo.png')} alt="Join our Discord" className="discord-logo" />
          </a>
        </div>
      </section>

      
    </div>
  );
}

export default App;
