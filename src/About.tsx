import { Building2, CircleCheck, Users, MonitorSmartphone } from "lucide-react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="section-heading">
          <p className="section-label">ABOUT US</p>

          <h2>
            Professional Financial Support,
            <span> Made Simple.</span>
          </h2>

          <p>
            Vijesh Naique Taxation & Accounts provides professional assistance
            for taxation, accounting, financial documentation and related
            requirements in Panaji, Goa.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-card main-about-card">
            <div className="about-icon">
              <Building2 size={25} />
            </div>

            <h3>About the Business</h3>

            <p>
              Our aim is to make taxation and accounting-related processes
              easier to understand and manage by providing reliable and
              organised professional assistance.
            </p>

            <div className="about-points">
              <div>
                <CircleCheck size={17} />
                Professional assistance
              </div>

              <div>
                <CircleCheck size={17} />
                Simple documentation process
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
              To create a professional online presence where customers can
              learn about available services and easily contact the office for
              assistance.
            </p>
          </div>

          <div className="purpose-card">
            <p className="purpose-number">02</p>

            <div className="purpose-icon">
              <Users size={24} />
            </div>

            <h3>Who Is It For?</h3>

            <p>
              Individuals, professionals and businesses looking for convenient
              taxation, accounting and documentation assistance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
