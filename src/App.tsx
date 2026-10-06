import './App.css'
import Navbar from './Navbar'

function App() {
  return (
    <main className="app">
      <Navbar />

      <section className="hero" id="home">
        <p className="eyebrow">Professional Taxation & Accounting Services</p>

        <h1>Vijesh Naique</h1>

        <h2>Taxation & Accounts</h2>

        <p className="description">
          Professional support for taxation, accounting and financial documentation
          in Panaji, Goa.
        </p>

        <a className="hero-button" href="#contact">
          Get in Touch
        </a>
      </section>
    </main>
  )
}

export default App
