import React from 'react';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container-pg">
        <h1>Contact Us</h1>
        <p>Have questions or want to book an appointment? Reach out to us!</p>
        <div className="contact-info">
          <h2>E-parlour</h2>
          <p>Address: 123 Salon Street, City, State, Zip Code</p>
          <p>Phone: +123 456 7890</p>
          <p>Email: info@salon.com</p>
        </div>
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label><br></br>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label><br></br>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
