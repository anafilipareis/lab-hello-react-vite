import React from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <img src="src/assets/ironhack-logo-xs.png" alt="Ironhack Logo" className="logo" />
        <img src="src/assets/menu-top-xs.png" alt="Menu Logo" className="menu-logo" />
      </nav>
      <header className="App-header">
        <div className="text-container">
          <h1>Say Hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super ninja developer.</p>
          <button className="awesome-button">Awesome!</button>
        </div>
      </header>
      <section className="icon-section">
      <div className="icon-container">
          <img src="src/assets/icon1.png" alt="Icon 1" className="icon" />
          <h3 className="icon-title">Declarative</h3>
          <p className="icon-description">React makes it painless to create interactive UIs.</p>
        </div>
        <div className="icon-container">
          <img src="src/assets/icon2.png" alt="Icon 2" className="icon" />
          <h3 className="icon-title">Components</h3>
          <p className="icon-description">Build encapsulated components that manage their state.</p>
        </div>
        <div className="icon-container">
          <img src="src/assets/icon3.png" alt="Icon 3" className="icon" />
          <h3 className="icon-title">Single-Way</h3>
          <p className="icon-description">A set of immutable values are passed to the component's.</p>
        </div>
        <div className="icon-container">
          <img src="src/assets/icon4.png" alt="Icon 4" className="icon" />
          <h3 className="icon-title">JSX</h3>
          <p className="icon-description">Statically-typed designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App
