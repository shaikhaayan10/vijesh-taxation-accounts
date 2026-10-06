import './App.css'
import Navbar from './Navbar'
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
              Trusted Taxation & Accounting Support
            </div>

            <p className="eyebrow">Professional Financial Assistance</p>

            <h1>
              Reliable Taxation &
              <span> Accounting Services</span>
            </h1>

            <p className="description">
              Professional assistance for taxation, accounts, documentation and
              financial requirements in Panaji, Goa.
            </p>

            <div className="hero-actions">
              <a className="hero-button primary" href="#contact">
                Get in Touch
                <ArrowRight size={18} />
              </a>

              <a className="hero-button secondary" href="#services">
                Explore Services
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
                  <h3>Taxation & Accounts</h3>
                </div>

                <div className="finance-logo">
                  VN
                </div>
              </div>

              <div className="finance-divider"></div>

              <div className="service-preview">
                <div className="service-icon">
                  <Calculator size={20} />
                </div>

                <div>
                  <span>Taxation</span>
                  <p>Professional assistance</p>
                </div>
              </div>

              <div className="service-preview">
                <div className="service-icon">
                  <Landmark size={20} />
                </div>

                <div>
                  <span>Accounting</span>
                  <p>Organised financial support</p>
                </div>
              </div>

              <div className="service-preview">
                <div className="service-icon">
                  <FileText size={20} />
                </div>

                <div>
                  <span>Documentation</span>
                  <p>Simple & reliable process</p>
                </div>
              </div>

              <div className="finance-card-footer">
                Panaji, Goa
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default App
