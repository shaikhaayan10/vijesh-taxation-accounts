import {
  Calculator,
  ReceiptText,
  FileSpreadsheet,
  BriefcaseBusiness,
  FileCheck2,
  Headphones
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Calculator size={24} />,
      title: "Taxation Assistance",
      description:
        "Professional assistance for general taxation-related requirements, documents and processes."
    },
    {
      icon: <FileSpreadsheet size={24} />,
      title: "Accounting Support",
      description:
        "Support for maintaining organised financial records and basic accounting requirements."
    },
    {
      icon: <ReceiptText size={24} />,
      title: "Financial Documentation",
      description:
        "Assistance in preparing, organising and managing important financial documents."
    },
    {
      icon: <BriefcaseBusiness size={24} />,
      title: "Business Support",
      description:
        "General accounting and documentation support for professionals and businesses."
    },
    {
      icon: <FileCheck2 size={24} />,
      title: "Document Review",
      description:
        "Help with checking and organising documents required for financial and taxation work."
    },
    {
      icon: <Headphones size={24} />,
      title: "Client Assistance",
      description:
        "Simple guidance and support to help clients understand the required process."
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="section-heading services-heading">
          <p className="section-label">OUR SERVICES</p>

          <h2>
            Professional Support for
            <span> Financial Requirements.</span>
          </h2>

          <p>
            A simple and organised approach to taxation, accounting and
            financial documentation assistance.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-card-top">
                <div className="service-card-icon">
                  {service.icon}
                </div>

                <span className="service-card-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact">
                Request Assistance
                <span>?</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
