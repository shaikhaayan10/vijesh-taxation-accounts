import './App.css'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'
import { ArrowRight, BadgeCheck, Calculator, FileText, Landmark } from 'lucide-react'

function App() {
  return (
    <main className="app">
      <Navbar />

      <section className="hero home-prototype" id="home">
        <div className="hero-container">

          <div className="hero-content">
            <div className="hero-badge">
              <BadgeCheck size={17} />
              Professional Tax Practitioner
            </div>

            <p className="eyebrow">Tax & Compliance Services</p>

            <h1>
              Clarity in every
              <span> number.</span>
            </h1>

            <p className="description">
              Professional assistance for GST, Income Tax, VAT, TDS/TCS Returns, Accounting, Auditing and Taxation in Panaji, Goa.
            </p>

            <div className="hero-actions">
              <a className="hero-button primary" href="#contact">
                Request Tax Assistance
                <ArrowRight size={18} />
              </a>

              <a className="hero-button secondary" href="#services">
                View Services
              </a>
            </div>

            <div className="hero-trust">
              <div>
                <strong>Professional</strong>
                <span>Service</span>
              </div>

              <div>
                <strong>Simple</strong>
                <span>Process</span>
              </div>

              <div>
                <strong>Reliable</strong>
                <span>Support</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="finance-card home-panel">
              <div className="finance-card-header">
                <div>
                  <p>Vijesh Naique</p>
                  <h3>Tax &amp; Compliance Services</h3>
                </div>

                <div className="finance-logo">VN</div>
              </div>

              <div className="finance-divider"></div>

              <div className="service-preview">
                <div className="service-icon">
                  <Calculator size={20} />
                </div>
                <div>
                  <span>GST</span>
                  <p>GST filing & compliance support</p>
                </div>
              </div>

              <div className="service-preview">
                <div className="service-icon">
                  <Landmark size={20} />
                </div>
                <div>
                  <span>Income Tax</span>
                  <p>Income tax return assistance</p>
                </div>
              </div>

              <div className="service-preview">
                <div className="service-icon">
                  <FileText size={20} />
                </div>
                <div>
                  <span>TDS/TCS Returns</span>
                  <p>Return preparation & filing support</p>
                </div>
              </div>

              <div className="finance-card-footer">
                Panaji, Goa
              </div>
            </div>
          </div>

        </div>

        <div className="home-offers">
          <p className="home-offers-label">OUR EXPERTISE</p>
          <h2>Everything you need, in one place.</h2>

          <div className="home-offers-grid">
            <a href="#services" className="home-offer-card">
              <Calculator size={18} />
              <span>GST</span>
            </a>

            <a href="#services" className="home-offer-card">
              <Landmark size={18} />
              <span>Income Tax</span>
            </a>

            <a href="#services" className="home-offer-card">
              <FileText size={18} />
              <span>VAT</span>
            </a>

            <a href="#services" className="home-offer-card">
              <FileText size={18} />
              <span>TDS/TCS Returns</span>
            </a>

            <a href="#services" className="home-offer-card">
              <Calculator size={18} />
              <span>Accounting</span>
            </a>

            <a href="#services" className="home-offer-card">
              <BadgeCheck size={18} />
              <span>Auditing</span>
            </a>

            <a href="#services" className="home-offer-card">
              <Landmark size={18} />
              <span>Taxation</span>
            </a>
          </div>
        </div>
        <div className="home-bottom-strip">
          <span>Vijesh Naique | Tax Practitioner</span>
          <a href="#contact">Get in Touch</a>
        </div>

      </section>

      <About />
      <Services />
      <Contact />
      <Footer />

    </main>
  )
}

export default App












