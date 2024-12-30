import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">THE FORGE</div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1>THE FORGE</h1>
        <p>Crafting Digital Excellence</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Custom websites built with modern technologies</p>
          </div>
          <div className="service-card">
            <h3>Mobile Apps</h3>
            <p>Native and cross-platform mobile solutions</p>
          </div>
          <div className="service-card">
            <h3>Cloud Solutions</h3>
            <p>Scalable and secure cloud infrastructure</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Ready to Build Something Great?</h2>
        <button className="cta-button">Contact Us</button>
      </section>

      <footer>
        <p>&copy; 2024 THE FORGE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
