import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
Hello, I would like to request tax assistance.

Name: ${name}
Phone: ${phone}
Email: ${email}
Service Required: ${service}
Message: ${message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/919960212698?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-label">CONTACT US</p>

          <h2>
            Let's discuss your
            <span> tax requirements.</span>
          </h2>

          <p>
            Get in touch for GST, Income Tax, VAT, TDS/TCS Returns,
            Accounting, Auditing and Taxation assistance.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-info">
            <p className="contact-label">VIJESH NAIQUE</p>

            <h3>Tax Practitioner</h3>

            <div className="contact-detail">
              <MapPin size={18} />
              <span>Panaji, Goa</span>
            </div>

            <div className="contact-detail">
              <Phone size={18} />
              <span>99602 12698</span>
            </div>

            <div className="contact-detail">
              <Mail size={18} />
              <span>Contact for professional tax assistance</span>
            </div>

            <a
              className="whatsapp-button"
              href="https://wa.me/919960212698"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Request Tax Assistance</h3>

            <p>
              Fill in your details and select the service you need.
            </p>

            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
              />
            </div>

            <div className="form-group">
              <label>Service Required</label>

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="">Select a service</option>
                <option value="GST">GST</option>
                <option value="Income Tax">Income Tax</option>
                <option value="VAT">VAT</option>
                <option value="TDS/TCS Returns">TDS/TCS Returns</option>
                <option value="Accounting">Accounting</option>
                <option value="Auditing">Auditing</option>
                <option value="Taxation">Taxation</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us briefly about your requirement"
                rows={3}
              />
            </div>

            <button className="send-enquiry-button" type="submit">
              <MessageCircle size={17} />
              Send Enquiry
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
