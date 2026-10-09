import './App.css'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import { ArrowRight, BadgeCheck, Calculator, FileText, Landmark } from 'lucide-react'

function App() {
  return (
    <main className="app">
      <Navbar />

      <section className="hero" id="home">
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
              Professional assistance for taxation, accounts, documentation and
              financial requirements in Panaji, Goa.
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

            <div className="finance-card">
              <div className="finance-card-header">
                <div>
                  <p>Vijesh Naique</p>
                  <h3>Professional Tax Services</h3>
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
      </section>

      <About />
      <Services />
      <Contact />

    </main>
  )
}

export default App




