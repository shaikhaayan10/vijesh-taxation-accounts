
import { useState, type CSSProperties, type FormEvent } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const SERVICES = [
  "GST",
  "Income Tax",
  "VAT",
  "TDS/TCS Returns",
  "Accounting",
  "Auditing",
  "Taxation",
] as const;

const errorStyle: CSSProperties = {
  display: "block",
  color: "#B42318",
  fontSize: "0.8rem",
  marginTop: "6px",
  lineHeight: 1.4,
};

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanMessage = message.trim();

  const errors = {
    name: !cleanName
      ? "Please enter your full name."
      : cleanName.length < 2
      ? "Name must contain at least 2 characters."
      : cleanName.length > 60
      ? "Name cannot exceed 60 characters."
      : !/^[\p{L}][\p{L}\s.'-]*$/u.test(cleanName)
      ? "Name can contain letters, spaces, dots, apostrophes and hyphens only."
      : "",

    phone: !phone
      ? "Please enter your mobile number."
      : !/^[6-9]\d{9}$/.test(phone)
      ? "Please enter a valid 10-digit Indian mobile number."
      : "",

    email: !cleanEmail
      ? "Please enter your email address."
      : cleanEmail.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail)
      ? "Please enter a valid email address."
      : "",

    service: !SERVICES.some((item) => item === service)
      ? "Please select a service."
      : "",

    message: !cleanMessage
      ? "Please enter your message."
      : cleanMessage.length < 10
      ? "Message must contain at least 10 characters."
      : cleanMessage.length > 1000
      ? "Message cannot exceed 1000 characters."
      : "",
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowErrors(true);

    const hasErrors = Object.values(errors).some(
      (error) => error !== ""
    );

    if (hasErrors) {
      return;
    }

    const whatsappMessage = `
Hello, I would like to request tax assistance.

Name: ${cleanName}
Phone: ${phone}
Email: ${cleanEmail}
Service Required: ${service}
Message: ${cleanMessage}
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

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <h3>Request Tax Assistance</h3>

            <p>
              Fill in your details and select the service you need.
            </p>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>

                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  maxLength={60}
                  autoComplete="name"
                  required
                  aria-invalid={showErrors && !!errors.name}
                  aria-describedby={
                    showErrors && errors.name
                      ? "contact-name-error"
                      : undefined
                  }
                />

                {showErrors && errors.name && (
                  <small
                    id="contact-name-error"
                    role="alert"
                    style={errorStyle}
                  >
                    {errors.name}
                  </small>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number</label>

                <input
                  id="contact-phone"
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10)
                    )
                  }
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  autoComplete="tel-national"
                  required
                  aria-invalid={showErrors && !!errors.phone}
                  aria-describedby={
                    showErrors && errors.phone
                      ? "contact-phone-error"
                      : undefined
                  }
                />

                {showErrors && errors.phone && (
                  <small
                    id="contact-phone-error"
                    role="alert"
                    style={errorStyle}
                  >
                    {errors.phone}
                  </small>
                )}
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>

              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                maxLength={254}
                autoComplete="email"
                required
                aria-invalid={showErrors && !!errors.email}
                aria-describedby={
                  showErrors && errors.email
                    ? "contact-email-error"
                    : undefined
                }
              />

              {showErrors && errors.email && (
                <small
                  id="contact-email-error"
                  role="alert"
                  style={errorStyle}
                >
                  {errors.email}
                </small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="contact-service">Service Required</label>

              <select
                id="contact-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                aria-invalid={showErrors && !!errors.service}
                aria-describedby={
                  showErrors && errors.service
                    ? "contact-service-error"
                    : undefined
                }
              >
                <option value="">Select a service</option>

                {SERVICES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              {showErrors && errors.service && (
                <small
                  id="contact-service-error"
                  role="alert"
                  style={errorStyle}
                >
                  {errors.service}
                </small>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>

              <textarea
                id="contact-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us briefly about your requirement"
                rows={3}
                maxLength={1000}
                required
                aria-invalid={showErrors && !!errors.message}
                aria-describedby={
                  showErrors && errors.message
                    ? "contact-message-error"
                    : undefined
                }
              />

              {showErrors && errors.message && (
                <small
                  id="contact-message-error"
                  role="alert"
                  style={errorStyle}
                >
                  {errors.message}
                </small>
              )}
            </div>

            <button
              className="send-enquiry-button"
              type="submit"
            >
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
