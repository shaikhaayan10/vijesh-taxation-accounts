import {
  Calculator,
  ReceiptText,
  FileSpreadsheet,
  Landmark,
  FileCheck2,
  ClipboardCheck,
  BadgeDollarSign
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <ReceiptText size={24} />,
      title: "GST",
      description:
        "GST filing, compliance and return assistance."
    },
    {
      icon: <Landmark size={24} />,
      title: "Income Tax",
      description:
        "Support for income tax returns and related requirements."
    },
    {
      icon: <Calculator size={24} />,
      title: "VAT",
      description:
        "Professional assistance for VAT-related work."
    },
    {
      icon: <FileCheck2 size={24} />,
      title: "TDS/TCS Returns",
      description:
        "Help with preparation and filing of TDS/TCS returns."
    },
    {
      icon: <FileSpreadsheet size={24} />,
      title: "Accounting",
      description:
        "Organised accounting and financial record support."
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Auditing",
      description:
        "Professional audit-related assistance."
    },
    {
      icon: <BadgeDollarSign size={24} />,
      title: "Taxation",
      description:
        "General taxation support and compliance assistance."
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">

        <div className="section-heading services-heading">
          <p className="section-label">OUR SERVICES</p>

          <h2>
            Professional Tax &amp;
            <span> Compliance Services.</span>
          </h2>

          <p>
            Professional assistance for taxation, compliance,
            accounting and audit-related requirements.
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
                  {String(index + 1).padStart(2, "0")}
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
