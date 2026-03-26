import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvrwkpk");

  if (state.succeeded) {
    return (
      <section id="contact" className="section-padding">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
            <FaPaperPlane style={{ marginRight: '10px', color: 'var(--primary)' }} />
            Get In Touch
          </h2>
          <div className="contact-container" style={{ textAlign: 'center' }}>
             <div style={{ fontSize: '3rem', marginBottom: '20px' }}>✅</div>
             <h3>Message Sent!</h3>
             <p style={{ color: 'var(--text-muted)' }}>
               Thanks for reaching out, I'll get back to you soon.
             </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
          <FaPaperPlane style={{ marginRight: '10px', color: 'var(--primary)' }} />
          Get In Touch
        </h2>
        <div className="contact-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" className="form-input" placeholder="Your Name" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" className="form-input" placeholder="you@example.com" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" className="form-textarea" placeholder="Write your message here..." required></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button type="submit" className="submit-btn" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;