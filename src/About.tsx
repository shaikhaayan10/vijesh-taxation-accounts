import { Building2, CircleCheck, Users, MonitorSmartphone } from "lucide-react";

function About() {
  return (
    <section className="about-section about-figma" id="about">
      <div className="about-container">

        <div className="section-heading">
          <p className="section-label">ABOUT US</p>

          <h2>
            PROFESSIONAL TAX PRACTITIONER,
            <span> made simple.</span>
          </h2>

          <p>
            Vijesh Naique provides professional tax practitioner services for individuals, professionals and businesses, including GST, Income Tax, VAT, TDS/TCS Returns, Accounting, Auditing and Taxation.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-card main-about-card">
            <div className="about-icon">
              <Building2 size={25} />
            </div>

            <h3>About the Business</h3>

            <p>
              Our aim is to make tax, accounting and compliance-related processes easier to understand and manage through professional and reliable assistance.
            </p>

            <div className="about-points">
              <div>
                <CircleCheck size={17} />
                Professional assistance
              </div>

              <div>
                <CircleCheck size={17} />
                Simple tax & compliance process
              </div>

              <div>
                <CircleCheck size={17} />
                Reliable customer support
              </div>
            </div>
          </div>

          <div className="purpose-card">
            <p className="purpose-number">01</p>

            <div className="purpose-icon">
              <MonitorSmartphone size={24} />
            </div>

            <h3>Website Purpose</h3>

            <p>
              To create a professional online presence where clients can understand the services offered and easily contact the office for tax and compliance assistance.
            </p>
          </div>

          <div className="purpose-card">
            <p className="purpose-number">02</p>

            <div className="purpose-icon">
              <Users size={24} />
            </div>

            <h3>Who Is It For?</h3>

            <p>
              Individuals, professionals and businesses looking for convenient tax, accounting, auditing and compliance assistance.
            </p>
          </div>

        </div>

      </div>
      <div className="about-bottom-strip">
        <div>
          <strong>Vijesh Naique</strong>
          <span>Tax Practitioner</span>
        </div>
        <a href="#contact">Get in Touch</a>
      </div>
    </section>
  );
}

export default About;




